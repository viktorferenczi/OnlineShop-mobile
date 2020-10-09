import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';


export const ProductItemScreen = ({ navigation }) => {

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <Text>test product item</Text>
        </SafeAreaView>
    );
}
