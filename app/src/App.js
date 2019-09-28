/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';


import {Provider} from 'react-redux';
import Counter from './components/counter.js';


export default class App extends Component {
    render() {
        return (
            <Counter />
        );
    }
}


