import React, { Component } from 'react';
import './_styles.scss';
import ListActivityItem from '../../blocks/ListActivityItem';
class Activity extends Component {
    static propTypes = {
        activityList: React.PropTypes.Array<>,
        getActivities: ,
    };

    render() {
        return (
            <div className="container-activity">
                <div className="container-label">Activity</div>
                <div>
                    <h3>Activity</h3>
                    <p>See a record of everyone you have shared with.</p>
                    <ListActivityItem />
                </div>
            </div>
        )
    }
}

export default Activity;