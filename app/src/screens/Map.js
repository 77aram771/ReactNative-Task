import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapStyle from '../JSON/map.json';


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    customMapStyle={MapStyle}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >

                </MapView>
                <TouchableOpacity onPress={() => Alert.alert("Don't Work Now") }>
                    <View>
                        <Image style={styles.activeButton}
                               source={require('../asstes/image/ActiveButton.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert("Don't Work Now") }>
                    <View>
                        <Image style={styles.activeButtonPos}
                               source={require('../asstes/image/NavButton.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 100 + '%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute'
    },
    activeButtonPos: {
        position: 'absolute',
        bottom: 550,
        left: 120,
    }
});

export default Map;