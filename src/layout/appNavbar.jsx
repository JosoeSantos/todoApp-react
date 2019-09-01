import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core';

const AppNavbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.navbar} position='static' color='primary'>
            <Toolbar>
                <Typography variant='h4' color='inherit'>
                    T.O.D.O.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles(() => createStyles({
    navbar: {
        boxShadow: 'none'
    }
}));

export default AppNavbar;
