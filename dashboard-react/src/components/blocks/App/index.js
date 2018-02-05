import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from '../../../store';
import { configureRoutes } from '../../../routes';
import  HeaderNavBar  from '../HeaderNavBar';
import './_styles.scss';

const store = createStore({});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <HeaderNavBar />
                    <div className="container-body">
                        <div className="menu-left">
                            <div className="item">
                                <span className="icon-activity" />Activity
                            </div>
                        </div>
                        <div className="content">
                            <BrowserRouter>
                                {configureRoutes(store)}
                            </BrowserRouter>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
