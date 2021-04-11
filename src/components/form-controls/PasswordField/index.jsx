import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
PasswordField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,

	label: PropTypes.string,
	disabled: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing(1),
	},
	withoutLabel: {
		marginTop: theme.spacing(3),
	},
	textField: {
		width: '25ch',
	},
}));
function PasswordField(props) {
	const classes = useStyles();
	const { form, name, label, disabled } = props;
	const [showPassword, setShowPassword] = useState(false);
	// const { errors, formState } = form;
	// const hasError = formState.touched[name] && errors[name];
	// return <Controller name={name} control={form.control} as={TextField} fullWidth label={label} disabled={disabled} />;
	const toggleShowPassword = () => {
		setShowPassword((x) => !x);
	};
	return (
		<div>
			{/* <Controller
				render={({ field }) => <TextField {...field} />}
				variant="outlined"
				margin="normal"
				name={name}
				control={form.control}
				// as={TextField}
				label={label}
				// fullWidth
				disabled={disabled}
				// error={!!hasError}
				// helperText={errors[name?.message]}
			/> */}
			{/* <Controller */}
			<FormControl fullWidth margin="normal" variant="outlined">
				<InputLabel htmlFor={name}>{label}</InputLabel>
				<OutlinedInput
					render={({ field }) => <TextField {...field} />}
					name={name}
					id={name}
					type={showPassword ? 'text' : 'password'}
					label={label}
					endAdornment={
						<InputAdornment position="end">
							<IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
								{showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}
					disabled={disabled}
					// error={!!hasError}
					// helperText={errors[name?.message]}
				/>
			</FormControl>
		</div>
	);
}

export default PasswordField;
