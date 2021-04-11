import React, { useState } from 'react';
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
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@material-ui/core';
import { Link, NavLink, Route, Router, Switch } from 'react-router-dom';
import './style.scss';
import Register from '../../features/Auth/components/Register';
import RegisterForm from '../../features/Auth/components/RegisterForm';
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
		marginRight: theme.spacing(2),
	},
}));

function Header(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<NavLink to="/" className={classes.link}>
							News
						</NavLink>
					</Typography>
					<Link className={classes.link} to="/todos">
						<Button color="inherit">Todos</Button>
					</Link>
					<Link className={classes.link} to="/products">
						<Button color="inherit">Products</Button>
					</Link>
					<Button color="inherit" onClick={handleClickOpen}>
						Register
					</Button>
				</Toolbar>
			</AppBar>

			<Dialog disableBackdropClick onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				{/* <Register /> */}
				<DialogContent>
					<Register />
				</DialogContent>

				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
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
