import React from 'react';
import {AsyncStorage} from 'react-native';

export async function authenticated() {
    let auth = JSON.parse(await AsyncStorage.getItem('@app:session'));
    if (auth !== null) {
        return true;
    } else {
        return false;
    }
}

export  async function redirected(){
    let redirected = JSON.parse(await AsyncStorage.getItem('redirected'));
    if (redirected !== null) {
        return true;
    } else {
        return false;
    }
}
