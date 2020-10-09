import React, {useEffect, useState} from 'react';
import {ActivityIndicator, AsyncStorage, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';



export const LoginScreen = ({ navigation }) => {




    function handleSignIn(email,password) {
        // get request with proper validation in normal case. ex: axios.get("/user/{}")
        //in this test project i will use asyncStorage
        const user = AsyncStorage.getItem("user");
        if(user !== null) {
            const userJson =  JSON.parse(user);
            if(email === userJson.email && password === userJson.password) {
                AsyncStorage.setItem('@app:session', "tokenExample123"); //session start with token
                return "Login successful";
            } else {
                return "Wrong email or password."
            }
        } else {
            return "User does not exists."
        }
    }

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <Text>test login</Text>
        </SafeAreaView>
    );
}
