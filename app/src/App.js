import React, {Component, Fragment} from 'react';
import Counter from './components/counter.js';
import SplashScreen from 'react-native-splash-screen'
import {StyleSheet, Text, SafeAreaView} from 'react-native';

export default class App extends Component {
    componentDidMount() {

        SplashScreen.hide();

    };

    render() {
        return (
            <Fragment>

                    {SplashScreen.show()}
                    <Counter />

            </Fragment>
        );
    }
}


