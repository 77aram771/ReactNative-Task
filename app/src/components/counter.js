import React, {Component} from 'react';
import {increment, decrement} from '../action/index';
import {Router, Scene, Drawer, Stack} from 'react-native-router-flux';
import LogIn from '../screens/LogIn'
import Register from '../screens/Register';
import Home from "../screens/Home";
import PhoneLog from "../screens/PhoneLog";
import MenuIcon from "../asstes/image/MenuIcon.png";
import DrawerContent from '../screens/DrawerContent';
import {Dimensions} from  'react-native';

const width = Dimensions.get('window').width;
let tallage = 75;
let result = width / 100 * tallage;

class Counter extends Component {
    render() {
        return (
            <Router
                hideNavBar="true"
                titleStyle={{color: '#fff'}}>
                <Drawer
                    hideNavBar={true}
                    contentComponent={DrawerContent}
                    key="drawer"
                    drawerImage={MenuIcon}
                    drawerPosition="left"
                    drawerWidth={result}
                    navigationBarStyle={{backgroundColor: '#2F2F2F', height: 100, textAlign: 'center'}}
                >

                    <Scene key="root">
                        <Scene key="PhoneLog" component={PhoneLog} hideNavBar={true} initial={true}/>
                        <Scene key="LogIn" component={LogIn} hideNavBar={true} title="LogIn"/>
                        <Scene key="Home" component={Home} title="Map" text="Lorem Ipsum street 2"/>
                        <Scene key="Register" component={Register} title="Register"/>

                    </Scene>
                    <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#000'}}>
                        <Scene key="Home" title="Home" component={Home} hideNavBar   />
                    </Scene>

                </Drawer>
            </Router>
        );
    }
}


export default  Counter;
