import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Profile extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>
                    Profile
                </Text>
            </View>
        )
    }
}

export default Profile;