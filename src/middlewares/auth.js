import React from 'react';
import {AsyncStorage} from 'react-native';

export async function authenticated() {
    return !await AsyncStorage.getItem('@app:session');
}

export  async function redirected(){
    return JSON.parse(await AsyncStorage.getItem("redirected"));
}
