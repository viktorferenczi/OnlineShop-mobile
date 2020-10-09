import React from 'react';
import { AsyncStorage } from 'react-native';

export default function authenticated() {
    return !AsyncStorage.getItem('@app:session');
}
