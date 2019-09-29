import React, {Component} from 'react';
import {Router, Scene, Drawer, Stack} from 'react-native-router-flux';
import {Dimensions, Image} from 'react-native';
import Map from '../screens/Map';
import ComingSoon from '../screens/ComingSoon';
import Profile from '../screens/Profile';
import DrawerContent from './DrawerContent';
import MenuIcon from "../asstes/image/MenuIcon.png";
import MapLogo from '../asstes/image/Ellipse.png';

const width = Dimensions.get('window').width;
let tallage = 75;
let result = width / 100 * tallage;

const iconMap = () => (
    <Image source={require('../asstes/image/Ellipse.png')}/>
);
const iconComingSoon = () => (
    <Image source={require('../asstes/image/Ellipse.png')}/>
);
const iconProfile = () => (
    <Image source={require('../asstes/image/Ellipse.png')}/>
);

class RouterTab extends Component {
    render() {
        return (
            <Router
                hideNavBar={true}
                titleStyle={{
                    color: '#fff',
                    flex: 1,
                    textAlign: 'center',
                    marginRight: 60
                }}>
                <Drawer
                    contentComponent={DrawerContent}
                    key="drawer"
                    drawerImage={MenuIcon}
                    drawerPosition="left"
                    drawerWidth={result}
                    navigationBarStyle={{backgroundColor: '#2F2F2F', height: 100, textAlign: 'center'}}
                    tabStyle={{
                        backgroundColor: '#282828',
                        color: 'red'
                    }}
                >
                    <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#000'}}>
                        <Scene key="Map" title="Map" component={Map} icon={iconMap}/>
                        <Scene key="ComingSoon" title="ComingSoon" component={ComingSoon} icon={iconComingSoon}/>
                        <Scene key="Profile" title="Profile" component={Profile} icon={iconProfile}/>
                    </Scene>
                </Drawer>
            </Router>
        )
    }
}

export default RouterTab;