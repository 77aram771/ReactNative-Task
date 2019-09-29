import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

const DrawerContent = () => {
    return (
        <Fragment>
            <View style={ styles.container }>
                <View style={styles.topDrawer}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <View style={styles.profileLogo}>
                            <Image style={styles.stretch}
                                   source={require('../asstes/image/Profile.png')}/>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.profileName}>Jane Smith</Text>
                    <Text style={styles.profileNumber}>+374 99431612</Text>
                </View>
                <View style={styles.bottomDrawer}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <View style={styles.bottomDrawerItem}>
                            <Image source={require('../asstes/image/setting.png')}/>
                            <Text style={{
                                marginLeft: 37
                            }}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <View style={styles.bottomDrawerItem}>
                            <Image source={require('../asstes/image/key.png')}/>
                            <Text style={{
                                marginLeft: 37
                            }}>Privacy and Policy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <View style={styles.bottomDrawerItem}>
                            <Image source={require('../asstes/image/info.png')}/>
                            <Text style={{
                                marginLeft: 37
                            }}>About</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.footerDrawer}>
                    <Text style={{
                        marginBottom: 8
                    }}>Developed by</Text>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Image style={{
                                marginRight: 6
                            }} source={require('../asstes/image/1.png')}/>
                            <Text>OWLFINITY LLC</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Fragment>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerText: {
        color: '#fff'
    },
    profileLogo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: 110,
        borderRadius: 150/2,
        backgroundColor: '#3e4037',
        borderStyle: 'solid',
        borderColor: 'red'
    },
    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',

    },
    profileName: {
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 36,
        color: '#fff',

    },
    profileNumber: {
        color: '#BBBBBB',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 20,
    },
    topDrawer: {
        flex: 1,
        backgroundColor: '#2F2F2F',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: 172,
        width: 100 + '%'
    },
    bottomDrawer: {
        width: 100 + '%',
        flex: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    bottomDrawerItem: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 25
    },
    footerDrawer: {
        paddingTop: 12,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderColor: 'rgba(0, 0, 0, 0.2);',
        borderStyle: 'solid',
        borderTopWidth: 1,
        width: 90 + '%',
        height: 100
    }
});
export default DrawerContent;