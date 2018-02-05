export const ACTIVITY_FETCHING_ITEMS = 'ACTIVITY_FETCHING_ITEMS';
export const fetchingItems = data => {
    return {
        type: ACTIVITY_FETCHING_ITEMS,
    };
};
export const ACTIVITY_FETCHED_ITEMS = 'ACTIVITY_FETCHED_ITEMS';
export const fetchedItems = data => {
    return {
        type: ACTIVITY_FETCHED_ITEMS,
        payload: data
    };
}
