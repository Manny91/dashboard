import filter from 'lodash/filter';
import concat from 'lodash/concat';
import {
    ACTIVITY_FETCHING_ITEMS,
    ACTIVITY_FETCHED_ITEMS
} from '../actions/activity';

import data from '../../data/mock-data.json';
const initialState = {
    items: [],
    isLoading: false,
    isLoadItems: false,

};

const handlers = {
    [ACTIVITY_FETCHING_ITEMS]: (state, { payload }) => {
        return ({
            ...state,
            isLoading: true,
            errors: []
        });
    },
    [ACTIVITY_FETCHED_ITEMS]: (state, { payload }) => {
        return ({
            ...state,
            isLoading: false,
            items: data.receipts,
            isLoadItems: true
        });
    },
};

export default (initialState, handlers) => (
    state = initialState,
    action
) => (handlers[action.type] ? handlers[action.type](state, action) : state);