import React from 'react';
import TodoList from './todoList';
import TodoForm from './todoForm';
import { Grid, Container, makeStyles, createStyles } from '@material-ui/core';
import { connect } from 'react-redux';

const TodoPage = props => {
    const styles = useStyles();
    return (
        <Container>
            <Grid className={styles.appContainer} container direction='column'>
                <TodoForm />
                <TodoList list={props.todoList} />
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles(theme =>
    createStyles({
        appContainer: {
            padding: theme.spacing(4)
        }
    })
);

const mapStateToProps = ({ todoList }) => {
    return {
        todoList: todoList
    };
};

export default connect(mapStateToProps)(TodoPage);
