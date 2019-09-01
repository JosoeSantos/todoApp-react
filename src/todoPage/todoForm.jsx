import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import * as todoPageActions from './todoPageActions';

const TodoForm = props => {
    const { addTodo } = props;
    const [todoTitle, setTodoTitle] = useState('');
    const [todoText, setTodoText] = useState('');
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                addTodo({ title: todoTitle, text: todoText });
            }}
        >
            <Grid container spacing={4}>
                <Grid item>
                    <TextField
                        label='Title'
                        variant='filled'
                        required
                        onChange={e => setTodoTitle(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label='Todo text'
                        variant='filled'
                        required
                        onChange={e => setTodoText(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Button type='submit'>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const mapDispatchToProps = {
    addTodo: todoPageActions.addTodo
};

export default connect(
    null,
    mapDispatchToProps
)(TodoForm);
