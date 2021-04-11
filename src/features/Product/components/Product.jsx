import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants';

Product.propTypes = {};

function Product({ product }) {
	const thumbnail = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
	return (
		<Box padding={1}>
			<Box padding={1}>
				<img
					// src="https://api.ezfrontend.com/uploads/9ff7d29c2ebad4fd802685eb770d9452_417240087a.jpg"
					src={thumbnail}
					alt={product.name}
					width="100%"
				/>
			</Box>

			<Typography variant="body2">{product.name}</Typography>
			<Typography variant="body2">
				<Box component="span" fontSize="16px" fontWeight="bold" marginRight="10px">
					{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
				</Box>
				{product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
			</Typography>
			<Skeleton width="60%" />
		</Box>
	);
}

export default Product;
