import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    useDeleteBookMutation
} from 'components/store/bookApi/book.api';
import UpdateBookModal from '../modals/UpdateBookModal';


export default function BookEdit({ item }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [deleteBook, { isSuccessDelete }] = useDeleteBookMutation();
    const onOpenDelete = async () => {
        await deleteBook({
            id: item?.id,
        });
        handleClose();
    };
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
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                Paper={{
                    style: {
                        maxHeight: '250px',
                        width: '200px',
                    },
                }}
            >
                <MenuItem onClick={renameHandler}>Edit</MenuItem>
                <MenuItem onClick={onOpenDelete}>Delete</MenuItem>
            </Menu>
            <UpdateBookModal isOpen={isOpen} onClose={handleCloseModal} item={item}/>
        </div>
    );
}
