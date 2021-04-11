import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, makeStyles, Typography, Button, TextField } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from '../../../../components/form-controls/PasswordField';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(4),
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 200,
		},
	},
	avatar: {
		margin: '0 auto',
		backgroundColor: 'red',
	},
	title: {
		margin: theme.spacing(2, 0, 3, 0),
		textAlign: 'center',
	},
	submit: {
		margin: theme.spacing(3, 0, 2, 0),
	},
	form: {
		margin: theme.spacing(4, 3, 4, 4),
	},
}));

RegisterForm.propTypes = {
	onSubmit: PropTypes.func,
};

function RegisterForm(props) {
	const [fullName, setFullName] = useState('');
	const classes = useStyles();
	const schema = yup.object().shape({});
	const form = useForm({
		defaultValues: {
			fullname: '',
			email: '',
			password: '',
			retypePassword: '',
		},
		resolver: yupResolver(schema),
	});

	const handleSubmit = (values) => {
		// const { onSubmit } = props;
		// if (onSubmit) {
		// 	onSubmit(values);
		// }
		// form.reset();
		console.log('values', values);
	};

	const getFullName = (e) => {
		console.log('e', e.target.value);
	};

	return (
		<div className={classes.root}>
			<Avatar className={classes.avatar}>
				<LockOutlined></LockOutlined>
			</Avatar>
			<Typography className={classes.title} component="h3" variant="h5">
				Create An Account
			</Typography>
			<form onSubmit={handleSubmit} margin="normal" className={classes.form}>
				{/* <InputField name={fullName} label="Full Name" form={form} onChange={getFullName} />
				<InputField name="email" label="Email" form={form} />
				<PasswordField name="password" label="Password" form={form} />
				<PasswordField name="retypePassword" label="Retype Password" form={form} />
				<Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
					Create an account
				</Button> */}
				<div>
					<TextField
						onChange={getFullName}
						fullWidth
						id="outlined-secondary"
						label="Full Name"
						variant="outlined"
						color="secondary"
					/>
				</div>
				<div>
					<TextField id="outlined-secondary" label="Email" variant="outlined" color="secondary" />
				</div>
				<div>
					{' '}
					<TextField id="outlined-secondary" label="Password" variant="outlined" color="secondary" />
				</div>
				<div>
					{' '}
					<TextField id="outlined-secondary" label="Retype password" variant="outlined" color="secondary" />
				</div>
				<div>
					<Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
						Create an account
					</Button>{' '}
				</div>
			</form>
		</div>
	);
}

export default RegisterForm;
