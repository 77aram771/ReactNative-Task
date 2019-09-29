import React, {Component} from 'react';
import {increment, decrement} from '../action/index';
import {Router, Scene, Drawer, Stack} from 'react-native-router-flux';
import LogIn from '../screens/LogIn'
import RouterTab from "../components/RouterTab";
import PhoneLog from "../screens/PhoneLog";

class Routers extends Component {
    render() {
        return (
            <Router
                hideNavBar={true}
                titleStyle={{
                    color: '#fff', flex: 1,
                    textAlign: 'center', marginRight: 60
                }}>

                <Scene key="root">
                    <Scene key="PhoneLog" component={PhoneLog} hideNavBar={true} initial={true}/>
                    <Scene key="LogIn" component={LogIn} hideNavBar={true} title="LogIn"/>
                    <Scene key="RouterTab" component={RouterTab} hideNavBar={true} title="Map"/>
                </Scene>
            </Router>
        );
    }
}


export default  Routers;
