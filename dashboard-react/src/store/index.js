import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware as router } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default ({ history }) => {
    const middleware = [
        thunk,
        router(history)
    ];

    const enhancer = applyMiddleware(...middleware);
    const store = createStore(rootReducer, composeWithDevTools(enhancer));

    return store;
};
