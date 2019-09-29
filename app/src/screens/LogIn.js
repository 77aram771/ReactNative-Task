import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {StyleSheet, TouchableOpacity, View, Dimensions, Text, Button, Image} from  'react-native';
import Logo from "../components/Logo";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
var tallage = 90;
var result = width / 100 * tallage;
class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberPhone: '+37499431612',
            code: ''
        }
    }

    render() {
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
                    }}>What’s the code?</Text>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 12,
                        lineHeight: 16,
                        color: '#fff',
                        marginBottom: 20,
                    }}>
                        {`Please enter the code sent to  ${this.state.numberPhone}`}
                    </Text>
                </View>

                <View style={{
                    marginTop: 40,
                    marginBottom: 63
                }}>
                    <SmoothPinCodeInput
                        cellStyle={{
                            borderBottomWidth: 2,
                            borderColor: 'gray',
                            marginLeft: 20
                        }}
                        cellStyleFocused={{
                            borderColor: 'black',
                        }}
                        value={this.state.code}
                        onTextChange={code => this.setState({code})}
                    />
                </View>

                <TouchableOpacity
                    style={styles.Buttonn}
                    onPress={() => {
                        Actions.Home()
                    }}>
                    <Text style={styles.ButtonText}> Log In </Text>
                </TouchableOpacity>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 60
                }}>
                    <Text
                        style={{
                            fontWeight: '700',
                            fontSize: 12,
                            lineHeight: 16,
                            color: '#fff',
                            marginRight: 10
                        }}
                    >Didn’t recieve the code?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            Actions.pop()
                        }}>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: 16,
                            lineHeight: 16,
                            textDecorationLine: "underline",
                            color: '#1DD196'
                        }}>Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        marginBottom: 45
    },
    ButtonText: {
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 16,
        color: '#fff'
    }
});

export default LogIn