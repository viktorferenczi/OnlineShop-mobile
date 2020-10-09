import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';


export const ProductsScreen = ({ navigation }) => {

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <Text>test products</Text>
        </SafeAreaView>
    );
}
