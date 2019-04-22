import React, {Component} from 'react';

import {StyleSheet, View, Alert, Platform, Button} from 'react-native';
import base64 from 'base-64';

const uri = "http://192.168.2.109:85/api/webapi/";
const username = "sduser";
const password = "sduser";
// const base64 = require('base-64');

export const callGETAPI = (name, parm) => {

    Alert.alert("Message", name + " " + parm);
    // fetch(uri + parm, {
    //     method: "GET",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': "Basic " + base64.encode(username + ":" + password)
    //     },
    //
    // })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         Alert.alert(responseJson['id']);
    //     })
    //     .catch((error) => {
    //         alert(error.toString() + " error");
    //     }).done();

}
