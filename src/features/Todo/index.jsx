import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListTodoPage from '../Todo/page/ListPage'
import DetailPage from './page/DetailPage';
TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch()
    return (
		<div>
		<Switch>
            <Route path={match.path} component={ListTodoPage} exact/>
            <Route path={`${match.path}/:todoId`} component={DetailPage}/>
        </Switch>
		</div>
	);
}

export default TodoFeature;