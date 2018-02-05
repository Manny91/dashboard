import { combineReducers } from 'redux';
import activityReducer from './activity';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    activity: activityReducer
});
