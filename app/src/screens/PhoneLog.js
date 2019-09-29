import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {StyleSheet, TouchableOpacity, View, Dimensions, Text, Button, Image} from  'react-native';
import PhoneInput from 'react-native-phone-input'
import CountryPicker from 'react-native-country-picker-modal';
import Logo from "../components/Logo";
import {CheckBox} from 'react-native-elements';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
let tallage = 90;
let result = width / 100 * tallage;
class PhoneLog extends Component {

    constructor() {
        super();
        this.state = {
            cca2: 'US',
            checked: false
        };
    }

    componentDidMount() {
        this.setState({
            pickerData: this.phone.getPickerData(),
        });
    }

    onPressFlag = () => {
        this.countryPicker.openModal();
    };

    selectCountry = (country) => {
        this.phone.selectCountry(country.cca2.toLowerCase());
        this.setState({cca2: country.cca2});
    };

    render() {
        console.log('result', result);
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Logo/>
                    <Text style={{
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: 18,
                        lineHeight: 16,
                        marginBottom: 20
                    }}>Phone Number</Text>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 12,
                        lineHeight: 16,
                        color: '#fff',
                        marginBottom: 20,
                    }}>
                        We’ll send a code to verify your phone
                    </Text>
                </View>
                <View style={styles.phoneBox}>
                    <Text style={{color: 'white'}}>Mobile</Text>
                    <PhoneInput
                        ref={(ref) => {
                            this.phone = ref;
                        }}
                        onPressFlag={this.onPressFlag}
                        style={{
                            marginTop: 15,
                            marginBottom: 15,
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                            borderBottomColor: '#fff',
                            paddingBottom: 15,
                            color: '#fff'
                        }}
                        textStyle={{fontSize: 14, color: '#fff'}}
                    />

                    <CountryPicker
                        ref={(ref) => {
                            this.countryPicker = ref;
                        }}
                        onChange={(value) => this.selectCountry(value)}
                        translation='eng'
                        cca2={this.state.cca2}
                        styles={{backgroundColor: '#fff', color: '#fff'}}
                    >
                        <View/>
                    </CountryPicker>
                    <View style={styles.CheckBox}>
                        <CheckBox
                            checkedIcon={<Image style={{

                            }} source={require('../asstes/image/checked.png')}/>}
                            uncheckedIcon={<Image source={require('../asstes/image/unchecked.png')}/>}
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                Actions.LogIn()
                            }}>
                            <Text style={{
                                fontWeight: "400",
                                fontSize: 17,
                                lineHeight: 16,
                                color: '#fff',
                                borderBottomWidth: 1,
                                borderBottomColor: '#fff',
                                borderBottomStyle: 'solid',
                                marginTop: 5
                            }}>Accept Privacy and Policy</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.Buttonn}
                    onPress={() => {
                        Actions.LogIn()
                    }}>
                    <Text style={styles.ButtonText}> NEXT </Text>
                </TouchableOpacity>
            </View>

        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
        padding: 20,
        backgroundColor: '#1D1D1D',
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneBox: {
        width: result,
        marginBottom: 32
    },
    info: {
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
        padding: 10,
        marginTop: 20
    },
    CheckBox: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',

        height: 30
    },
    button: {
        marginTop: 20,
        padding: 10
    },
    Buttonn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1DD196',
        borderRadius: 30,
        width: result,
        height: 44,
        marginBottom: 113
    },
    ButtonText: {
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 16,
        color: '#fff'
    }
});


export default PhoneLog