import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
function ProductFeature(props) {
	const math = useRouteMatch();

	return (
		<div>
			Product Feature
			<Switch>
				<Route path={math.url} exact component={ListPage} />
			</Switch>
		</div>
	);
}

export default ProductFeature;
