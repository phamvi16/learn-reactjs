import React from 'react';
import PropTypes from 'prop-types';
import {
	Box,
	Container,
	Grid,
	makeStyles,
	AppBar,
	Toolbar,
	IconButton,
	MenuIcon,
	Typography,
	Button,
} from '@material-ui/core';
import { Link, NavLink, Route, Router, Switch } from 'react-router-dom'
import './style.scss';
Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: 'white',
		marginRight: theme.spacing(2)
	}
}));

function Header(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					></IconButton>
					<Typography variant="h6" className={classes.title}>
						News
					</Typography>
					<Typography variant="h6">
					<Link to='/todos' className={classes.link}>Todo</Link>
					</Typography>
					<Typography variant="h6">
					<Link to='/products' className={classes.link} >Products</Link>
					</Typography>
					
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// }));

// export default function ButtonAppBar() {
// 	const classes = useStyles();

// 	return (
// 		<div className={classes.root}>
// 			<AppBar position="static">
// 				<Toolbar>
// 					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
// 						<MenuIcon />
// 					</IconButton>
// 					<Typography variant="h6" className={classes.title}>
// 						News
// 					</Typography>
// 					<Button color="inherit">Login</Button>
// 				</Toolbar>
// 			</AppBar>
// 		</div>
// 	);
// }