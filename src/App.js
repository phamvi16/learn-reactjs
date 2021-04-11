import React, { useEffect } from 'react';
import { Link, NavLink, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumList from './features/Album/components/AlbumList';
import ProductFeature from './features/Product';
import ListPage from './features/Product/pages/ListPage';
import Header from './components/Header';
import productApi from './api/productApi';
function App() {
	return (
		<div>
			<Switch>
				<div>
					<Header />
					{/* <p>
            <Link to='/todos'>Todos</Link>
          </p>
          <p>
            <Link to='/products'>Products</Link>
          </p> */}
					<p>
						<NavLink to="/todos" activeClassName="active-menu">
							Todos
						</NavLink>
					</p>
					<p>
						<NavLink to="/products">Products</NavLink>
					</p>
					<Route path="/todos" component={TodoFeature} />
					<Route path="/albums" component={AlbumList} />
					<Route path="/products" component={ProductFeature} />
					{/* Footer */}
				</div>
			</Switch>
		</div>
	);
}

export default App;
