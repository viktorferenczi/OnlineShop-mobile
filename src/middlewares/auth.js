import React from 'react';
import {AsyncStorage} from 'react-native';

export async function authenticated() {
    const auth = await AsyncStorage.getItem('@app:session');
    return auth != null;
}

export  async function redirected(){
    console.log("ridajekt")
    const redirect = await AsyncStorage.getItem("redirected");
    return redirect != null;
}
