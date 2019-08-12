import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor:'#009688' }} position="static">
                <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    TwitchTV Pro Dashboard
                </Typography>
                <div>
                    <Button variant="contained" className={classes.button} style={{ marginLeft: '1em'}}>
                        <Link to="/" className="card-link">Top Games</Link>
                    </Button>

                    <Button variant="contained" className={classes.button} style={{ marginLeft: '1em'}}>
                        <Link to="/top-streams" className="card-link">Top Live Streams</Link>
                    </Button>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
}));

export default Header;