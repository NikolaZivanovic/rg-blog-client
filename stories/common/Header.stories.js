import React from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import configureStore,{history} from '../../src/store/configureStore';
const store = configureStore();

import { storiesOf } from '@storybook/react';

import Header from '../../src/components/common/Header';


storiesOf('common/Header', module)
    .addDecorator( getStory => (<Provider store={store}><ConnectedRouter history={history}>{getStory()}</ConnectedRouter></Provider>) )
    .add('default text', () => <Header />);
