import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import logo from '../images/logo.png'
import { Badge } from '@material-ui/core';

export default function Navbar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                        <img src={logo} alt='logo' className={classes.logo} />
                    </IconButton>
                    <div className={classes.grow} />
                    <div className={classes.btns}>
                        <IconButton aria-label='show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCartRoundedIcon fontSize='large' className={classes.btnCart} />
                            </Badge>
                        </IconButton>
                        <Button variant='outlined' className={classes.btnLog}>
                            <strong>Sign In</strong>
                        </Button> 
                    </div>
                 </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '6rem',
    },
    appBar: {
        backgroundColor: '#146C78',
        boxShadow: 'none',
        color: '#EFEDE7',
    },
    grow: {
        flexGrow: 1,
    },
    btns: {
        marginLeft: theme.spacing(2),
    },
    btnLog: {
        color: '#EFEDE7',
        borderColor: '#EFEDE7',
        marginLeft: theme.spacing(3),
    },
    btnCart: {
        color: '#7DCE94',
    },
    logo: {
        height: '60px',
        marginRight: '10px',
        objectFit: 'contain',
        cursor: 'pointer'
    }
}));
