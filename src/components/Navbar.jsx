import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import logo from '../images/logo.png'
import { Badge, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';

export default function Navbar() {

    const classes = useStyles();
    const [{cart, user}, dispatch ] = useStateValue();
    const navigate = useNavigate();

    // Function to close user session
    const handleAuth = () => {
        if (user) {
            auth.signOut()
            dispatch({
                type: actionTypes.EMPTY_CART,
                cart: [],
            })
            dispatch({
                type: actionTypes.SET_USER,
                user: null,
            })
            navigate('/')
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Link to={`/`}>
                        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                            <img src={logo} alt='logo' className={classes.logo} />
                        </IconButton>
                    </Link>
                    <div className={classes.grow} />
                    <Typography variant='h6' color='textPrimary' component='p'>
                        Hi {user ? user.email : 'Guest'}
                    </Typography>
                    <div className={classes.btns}>
                        <Link to={`/cart`}>
                            <IconButton aria-label='show cart items' color='inherit'>
                                <Badge badgeContent={cart?.length} color='secondary'>
                                    <ShoppingCartRoundedIcon fontSize='large' className={classes.btnCart} />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link to={`/signin`}>
                            <Button variant='outlined' className={classes.btnLog} onClick={handleAuth}>
                                <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
                            </Button>
                        </Link> 
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
