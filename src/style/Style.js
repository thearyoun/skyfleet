import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'skyblue',
        // backgroundImage: './../images/bg.png'
    },
    StyleImageLogo: {
        width: 180,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        // flex: 1,
    },
    Header0: {
        color: 'black',
        fontSize: 38,
        textAlign: 'center'
    },
    Header1: {
        color: 'black',
        fontSize: 32,
        textAlign: 'center'
    },
    Header2: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center'
    },
    Header2Top: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10
    },
    Header3: {
        color: 'black',
        fontSize: 18.72,
        textAlign: 'center'
    },
    Header4: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    Header5: {
        color: 'black',
        fontSize: 13.72,
        textAlign: 'center'
    },
    Header6: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center'
    },

    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputs: {
        height: 45,
        marginLeft: 0,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        // color: 'black',
        fontSize: 18
    },

    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#0D47A1",
    },
    loginText: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase'
    }
});

export default styles;