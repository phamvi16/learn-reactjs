import React from 'react';
import { Link, NavLink, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumList from './features/Album/components/AlbumList'
import ProductFeature from './features/Product';
import ListPage from './features/Product/pages/ListPage';
import Header from './components/Header';
function App() {

  return (
	  <Switch>
		<div className="App">
			<Header/>
				<Route path="/todos" component={TodoFeature} />
				<Route path="/albums" component={AlbumList}/>
				<Route path="/products" component={ProductFeature}/> 
			
			
			Footer
		</div>
		</Switch>
  );
}

export default App;
