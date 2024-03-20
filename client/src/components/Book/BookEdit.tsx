import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDeleteBookMutation } from '../../store/bookApi/book.api';
import UpdateBookModal from '../modals/UpdateBookModal';
interface TypeBook {
    title: string;
    author: string;
    description: string;
    image: any;
    id: string;
}

/**
 * BookEdit component.
 * This component renders the edit modal and the dropdown menu
 * for a specific book.
 */
const BookEdit = ({ item }: { item: TypeBook }) => {
    // state to keep track of the anchor element
    const [anchorEl, setAnchorEl] = React.useState(null);
    // calculate the open state of the menu
    const open = Boolean(anchorEl);
    // state to keep track of the open state of the modal
    const [isOpen, setIsOpen] = React.useState(false);

    // set isOpen to true and close the menu
    const handleOpenModal = () => {
        setIsOpen(true);
        setAnchorEl(null);
    };

    // set isOpen to false
    const handleCloseModal = () => setIsOpen(false);

    // set the anchorEl to the currentTarget element
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    // set the anchorEl to null
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Apollo useDeleteBookMutation hook
    const [deleteBook] = useDeleteBookMutation();

    // delete the book from the database and close the menu
    const onOpenDelete = async () => {
        await deleteBook({
            id: item?.id,
        });
        handleClose();
    };

    // close the menu and open the modal
    const renameHandler = async () => {
        handleClose();
        handleOpenModal();
    };

    return (
        <div
            style={{
                position: 'absolute',
                right: '0',
                top: '0',
                zIndex: '1000',
            }}
        >
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={renameHandler}>Edit</MenuItem>
                <MenuItem onClick={onOpenDelete}>Delete</MenuItem>
            </Menu>
            <UpdateBookModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                item={item}
            />
        </div>
    );
};


export default BookEdit;
