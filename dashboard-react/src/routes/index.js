import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
    activity
} from './routesConstants';

import Activity from '../components/pages/Activity';


export const configureRoutes = store => {
    return (
        <Switch>
            <Route component={Activity} exact path={activity} />
        </Switch>
    );
};
