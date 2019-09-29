import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import logo from '../asstes/image/logo.png';


class Logo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={styles.stretch}
                    source={require('../asstes/image/logo.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0
    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    }
})

export default Logo;