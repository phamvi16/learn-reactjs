import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import { Box } from '@material-ui/core';

ProductFilters.propTypes = {
	filters: PropTypes.object.isRequired,
	onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
	const handleCategoryChange = (newCategoryId) => {
        ì(!onChange) return;
		const newFilters = {
			...filters,
			categoryId: newCategoryId,
		};
		onChange(newFilters);
	};
	return (
		<Box>
			<FilterByCategory onChange={handleCategoryChange} />
			<FilterByPrice />
		</Box>
	);
}

export default ProductFilters;
