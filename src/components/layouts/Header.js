import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Typography,
	IconButton,
	Button,
	Toolbar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const Header = props => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='Menu'>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						News
					</Typography>
					<Button onClick={props.handleClick} color='inherit'>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
