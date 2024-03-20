import * as React from 'react';
import Button from '@mui/material/Button';

import { TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useCreateBookMutation } from '../../store/bookApi/book.api';

import { MuiFileInput } from 'mui-file-input';
type TypeBook = {
    title: string;
    author: string;
    description: string;
    id: string;
    image: any;
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
interface CreateBookModalProps {
    isOpen: boolean;
    onClose: () => void;
    item?: TypeBook;
}
type Inputs = {
    title: string;
    author: string;
    description: string;
    id: any;
    image: any;
};
export default function CreateBookModal({
    isOpen,
    onClose,
}: CreateBookModalProps) {
    const [createBook] = useCreateBookMutation();

    const {
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            image: null,
        },
    });

    const onSubmit: SubmitHandler<Inputs> = async data => {
        const formData = new FormData();
        // Додавання текстових полів
        formData.append('title', data.title);
        formData.append('author', data.author);
        formData.append('description', data.description);
        // Додавання файлу, якщо він вибраний
        if (data.image) {
            formData.append('image', data.image);
        }
        // Логування вмісту FormData
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
        const res = await createBook(formData); 

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
                        <Controller
                            name="image"
                            control={control}
                            render={({ field, fieldState }) => {
                                return (
                                    <MuiFileInput
                                        {...field}
                                        placeholder="Insert a image"
                                        helperText={
                                            fieldState.invalid
                                                ? 'File is invalid'
                                                : ''
                                        }
                                        error={fieldState.invalid}
                                    />
                                );
                            }}
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
                            Create this book
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}
