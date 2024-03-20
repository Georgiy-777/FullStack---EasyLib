import { TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateBookMutation } from '../../store/bookApi/book.api';

type TypeBook = {
    title: string;
    author: string;
    description: string;
    id: string;
};
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '600px',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};
interface UpdateBookModalProps {
    isOpen: boolean;
    onClose: () => void;
    item?: TypeBook;
}
type Inputs = {
    title: string;
    author: string;
    description: string;
    id: any;
};
export default function UpdateBookModal({
    isOpen,
    onClose,
    item,
}: UpdateBookModalProps) {
    const [updateBook] = useUpdateBookMutation();

    const {
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        const res = await updateBook({
            id: Number(item?.id),
            title: data?.title || item?.title,
            author: data?.author || item?.author,
            description: data?.description || item?.description,
        });
        if (res) {
            onClose(), reset();
        } else {
            reset();
        }
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpen}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isOpen}>
                <Box sx={style}>
                    <h2 id="unstyled-modal-title" className="modal-title">
                        Add your book in library
                    </h2>

                    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            defaultValue={item?.title}
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    margin="normal"
                                    fullWidth
                                    id="title"
                                    type="text"
                                    label="Title"
                                    name="title"
                                />
                            )}
                        />

                        <Controller
                            name="author"
                            defaultValue={item?.author}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    margin="normal"
                                    fullWidth
                                    name="author"
                                    label="Author"
                                    type="text"
                                    id="author"
                                />
                            )}
                        />

                        <Controller
                            name="description"
                            defaultValue={item?.description}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    margin="normal"
                                    fullWidth
                                    name="description"
                                    label="Description"
                                    type="text"
                                    id="description"
                                />
                            )}
                        />

                        <Button
                            sx={{
                                width: '100%',
                                mt: 3,
                                bgcolor: 'primary.main',
                                color: 'white',
                                borderRadius: '10px',
                                ':hover': { bgcolor: 'primary.dark' },
                            }}
                            type="submit"
                        >
                            Update this book
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}
