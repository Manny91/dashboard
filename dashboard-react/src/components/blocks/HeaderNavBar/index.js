import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_styles.scss';

class HeaderNavBar extends Component {

    render() {
        const { user, logo } = this.props;
        const status = 'Connected';
        return (
        <div className="container">
            <div className="logo-container">
                <div className="icon-logo"></div>
            </div>
            <div className="status-panel">
                <span className="status-label"> {status} </span>
                <span className="icon-connect-on" />
            </div>
            <div className="user-panel">
                <img className="img-user"  src='//i.ytimg.com/vi/br0fAv0s7w8/hqdefault.jpg' />
            </div>
        </div>);
    }
}

HeaderNavBar.propTypes = {
    user: PropTypes.object,
    status: PropTypes.string
};

export default HeaderNavBar;