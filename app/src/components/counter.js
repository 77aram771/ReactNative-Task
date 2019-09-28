import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Button, Title, CardItem} from 'native-base';
import {increment, decrement} from '../action/index';
import {Router, Scene} from 'react-native-router-flux';
import {connect} from 'react-redux';
import LogIn from '../screens/LogIn'
import Register from '../screens/Register';
import Home from "../screens/Home";


class Counter extends Component {
    render() {
        console.log(this.props.count);
        return (
            <Router hideNavBar="true">
                <Scene key="root">
                    <Scene key="Home" component={Home} initial={true}/>
                    <Scene key="LogIn" component={LogIn} title="LogIn"/>
                    <Scene key="Register" component={Register} title="Register"/>
                </Scene>
            </Router>
        );
    }
}


export default  Counter;
