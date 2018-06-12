import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import App from './App';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class Root extends Component {
    render() {
        const {store, history} = this.props;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <App/>
                    </ConnectedRouter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
