import React from 'react';
import {
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    Typography
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';

const TodoItem = props => {
    const { item } = props;
    return (
        <ListItem>
            <ListItemText primary={item.title} secondary={item.text}/>
            <Typography variant='subtitle1'>
                Status: {item.status}
            </Typography>
            <ListItemIcon edge='end'>
                <IconButton>
                    <Edit />
                </IconButton>
            </ListItemIcon>
        </ListItem>
    );
};

export default TodoItem;
