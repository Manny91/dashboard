import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { activities } from '../../../data/mock-data.json';
import './_styles.scss';

class ListActivityItem extends Component {

    render() {
        const { activity } = this.props;

        return (<div className="activity-item">
            <div className="activity-label">
                Today
            </div>
            <div className="activity-body">
                <span className="icon-activity-ticked" />
                <span className="icon-activity-ticked" />
                Yoti Shared
                <span className="activity-time">
                    12:05
                    18 July 2017
                </span>
            </div>


        </div>);
    }
}

ListActivityItem.propTypes = {
    activity: PropTypes.object
};

export default ListActivityItem;