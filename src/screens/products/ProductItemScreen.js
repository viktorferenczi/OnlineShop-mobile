import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import ProductItem from "../../components/product/ProductItem";


export const ProductItemScreen = ({ navigation }) => {

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <ProductItem/>
        </SafeAreaView>
    );
}
