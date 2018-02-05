import { connect } from 'react-redux';
import {
    fetchingItems,
    fetchedItems
} from '../../../store/actions/activity';
import Component from './Activity';

function mapStateToProps(state) {
    return {listActivities: state.activity};
}

function mapDispatchToProps(dispatch) {
    return {
        fetchingActivities: () => dispatch(fetchingItems)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
