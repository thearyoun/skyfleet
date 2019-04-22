/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Image, Alert, TextInput, TouchableHighlight} from 'react-native';
import styles from '../style/Style';
import * as global from './Global';

import DeviceInfo from 'react-native-device-info';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            usernameError: 'Username',
            passwordError: 'Password',
            placeHolderColorUsername: "black",
            placeHolderColorPassword: "black",
            autoFocus1: false,
            autoFocus2: false,
        }
    }

    onClickListener = (viewId) => {

        var id = DeviceInfo.getUniqueID();
        Alert.alert(id+" come here");
        return false;

        if (this.state.username == "") {

            const usernameError = "Username is required";
            this.setState({
                usernameError: usernameError,
                placeHolderColorUsername: "red",
                autoFocus1: true,
                autoFocus2: false,
            });

            return false;
        }

        if (this.state.password == "") {

            const passwordError = "Password is required";

            this.setState({
                passwordError: passwordError,
                placeHolderColorPassword: "red",
                autoFocus2: true,
                autoFocus1: false
            });

            return false;
        }

        let name = "AppCheckDriverLogin";
        const parm = [{
            "Username": this.state.username,
            "Password": this.state.password,

        }];
        global.callGETAPI(name, parm);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: 30}}></View>

                <View>
                    <Text style={styles.Header0}>SkyFleet</Text>
                    <Text style={styles.Header2}>Fuel System Management</Text>
                    <Text style={styles.Header2Top}>Driver Login</Text>
                </View>

                <View>
                    <Image source={require('./../images/login.png')} style={styles.StyleImageLogo}/>
                </View>

                <View>
                    <View style={{height: 20}}></View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon}
                               source={require('./../images/username.png')}/>
                        <TextInput style={styles.inputs}
                                   placeholder={this.state.usernameError}
                                   placeholderTextColor={this.state.placeHolderColorUsername}
                                   autoFocus={this.state.autoFocus1}
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(username) => this.setState({username})}/>
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon}
                               source={require('./../images/password.png')}/>
                        <TextInput style={styles.inputs}
                                   placeholder={this.state.passwordError}
                                   placeholderTextColor={this.state.placeHolderColorPassword}
                                   secureTextEntry={true}
                                   autoFocus={this.state.autoFocus2}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(password) => this.setState({password})}/>
                    </View>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                        onPress={() => this.onClickListener('login_text')}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
}