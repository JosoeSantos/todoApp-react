import React from 'react';
import TodoItem from './todoItem';
import { List } from '@material-ui/core';

const TodoList = props => (
    <List>
        {props.list.map(item => (
            <TodoItem key={item.id} item={item} />
        ))}
    </List>
);

export default TodoList;
