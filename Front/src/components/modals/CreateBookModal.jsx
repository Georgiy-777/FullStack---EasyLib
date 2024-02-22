import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';

import { useForm, Controller } from 'react-hook-form';
import Input from '@mui/material/Input';

import { Input as TextArea } from '@mui/base/Input';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Button } from '@mui/material';
import { useCreateBookMutation } from 'components/store/bookApi/book.api';

const InputMultiline = React.forwardRef(function CustomInput(props, ref) {
    return (
        <TextArea
            slots={{
                root: RootDiv,
                input: 'input',
                textarea: TextareaElement,
            }}
            {...props}
            ref={ref}
        />
    );
});
export default function CreateBookModal({ isOpen, onClose }) {
    const [createBook, { isSuccess, isError }] = useCreateBookMutation();

    const {
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async data => {
        console.log(data);
        const res = await createBook({
            title: data?.title,
            author: data?.author,
            description: data?.description,
        });
        if (res) {
            onClose(), reset();
        } else {
            reset();
        }
    };
    React.useEffect(() => {
        if (isSuccess) {
            onClose();
        }
    }, [isSuccess]);
    return (
        <Modal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={isOpen}
            onClose={() => onClose()}
            slots={{ backdrop: StyledBackdrop }}
        >
            <ModalContent sx={{ width: 600, py: 7, px: 10 }}>
                <h2 id="unstyled-modal-title" className="modal-title">
                    Add your book in library
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <StyledLabel htmlFor="title">Title:</StyledLabel>

                        <Controller
                            name="title"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <StyledInput {...field} />}
                        />
                        {errors.title && <span>This feld is required</span>}
                    </div>

                    <div>
                        {/* <label htmlFor="email">Электронная почта:</label> */}
                        <StyledLabel htmlFor="author">Author:</StyledLabel>

                        <Controller
                            name="author"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <StyledInput {...field} />}
                        />
                        {errors.author && <span>This feld is required</span>}
                    </div>

                    <div>
                        <StyledLabel htmlFor="description">
                            Description:
                        </StyledLabel>
                        {/* <label htmlFor="password">Пароль:</label> */}
                        <Controller
                            name="description"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <InputMultiline multiline {...field} />
                            )}
                        />
                        {errors.description && (
                            <span>This feld is required</span>
                        )}
                    </div>

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
                        Create book
                    </Button>
                </form>
            </ModalContent>
        </Modal>
    );
}

const StyledLabel = styled('label')(
    ({ theme }) => css`
        display: block;
        font-weight: 500;
        margin-bottom: 2px;
        color: ${theme.palette.mode === 'dark' ? blue[300] : blue[600]};
        font-size: 1.2rem;
    `,
);

const StyledInput = styled(Input)(
    ({ theme }) => css`
        border: 1px solid
            ${theme.palette.mode === 'dark' ? grey[700] : grey[300]};
        border-radius: 7px;
        padding: 5px 10px;
        font-size: 1.1rem;
        margin-bottom: 16px;
        width: 100%;
        &:hover {
            border-color: ${theme.palette.mode === 'dark'
                ? blue[500]
                : blue[700]};
        }
        &:focus-within {
            border-color: ${theme.palette.mode === 'dark'
                ? blue[300]
                : blue[500]};
            box-shadow: 0 0 0 2px
                ${theme.palette.mode === 'dark' ? blue[500] : blue[300]};
        }
    `,
);
const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'base-Backdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
    ({ theme }) => css`
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
        text-align: start;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow: hidden;
        background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border-radius: 8px;
        border: 1px solid
            ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0 4px 12px
            ${theme.palette.mode === 'dark'
                ? 'rgb(0 0 0 / 0.5)'
                : 'rgb(0 0 0 / 0.2)'};
        padding: 24px;
        color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

        & .modal-title {
            margin: 0;
            line-height: 1.5rem;
            margin-bottom: 8px;
        }

        & .modal-description {
            margin: 0;
            line-height: 1.5rem;
            font-weight: 400;
            color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
            margin-bottom: 4px;
        }
    `,
);

const RootDiv = styled('div')`
    display: flex;
    max-width: 100%;
`;

const TextareaElement = styled(TextareaAutosize)(
    ({ theme }) => `
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 8px 12px;
  border-radius: 8px 8px 0 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
        theme.palette.mode === 'dark' ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }

  border: 1px solid
  ${theme.palette.mode === 'dark' ? grey[700] : grey[300]};
border-radius: 7px;
padding: 5px 10px;
font-size: 1.1rem;
margin-bottom: 16px;
width: 100%;
&:hover {
  border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[700]};
}
&:focus-within {
  border-color: ${theme.palette.mode === 'dark' ? blue[300] : blue[500]};
  box-shadow: 0 0 0 2px
      ${theme.palette.mode === 'dark' ? blue[500] : blue[300]};
}
`,
);
