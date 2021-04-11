import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,

	label: PropTypes.string,
	disabled: PropTypes.bool,
};

function InputField(props) {
	const { form, name, label, disabled } = props;
	// return <Controller name={name} control={form.control} as={TextField} fullWidth label={label} disabled={disabled} />;
	return (
		<TextField
			variant="outlined"
			margin="normal"
			name={name}
			control={form.control}
			as={TextField}
			label={label}
			fullWidth
			disabled={disabled}
		/>
		// <Controller
		// 	render={({ field }) => <TextField {...field} {...label} />}
		// 	variant="outlined"
		// 	margin="normal"
		// 	name={name}
		// 	control={form.control}
		// 	label={label}
		// 	fullWidth
		// 	disabled={disabled}
		// />
	);
}

export default InputField;
