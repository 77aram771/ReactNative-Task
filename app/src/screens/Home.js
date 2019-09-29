import React, {Component} from 'react';
import {Router, Scene, Drawer, Stack} from 'react-native-router-flux';
import Register from './Register';
import Map from './Map';

class Home extends Component {
    render() {
        return (
            <Router>
                <Scene hideNavBar>
                    <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#000'}}>
                        <Scene key="Map" title="Map" component={Map} hideNavBar/>
                        <Scene key="Register" title="Register" component={Register} hideNavBar/>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default Home