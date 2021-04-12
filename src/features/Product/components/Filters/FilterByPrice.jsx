import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@material-ui/core';

FilterByPrice.propTypes = {};

function FilterByPrice(props) {
	const [values, setValues] = useState({
		salePrice_gte: 0,
		salePrice_lte: 0
	})

	const handleChange = (e) => {
		setValues((prevValues) => ({
			...prevValues,
			[e.target.name]: e.target.value
		}));
	}

	const handleSubmit = (values) => {
		console.log('values', values);
	}
	return <Box>
		<Typography variant="subtitle2">GIÁ</Typography>
		<Box>
			<TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange}/>
			<span>-</span>
			<TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange}/>
		</Box>
		<Button variant='outlined' color='primary' onClick={handleSubmit}>Áp dụng</Button>
	</Box>;
}

export default FilterByPrice;
