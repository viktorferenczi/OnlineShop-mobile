import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import ProductItem from "../../components/product/ProductItem";
import NumericInput from 'react-native-numeric-input';


export const ProductItemScreen = ({ route, navigation }) => {

    const product = route.params;

   function addToCartHandler(){
        //add to cart
       //redirect to productsScreen
    }

    return (
        <SafeAreaView>
            <StatusBar style="dark" />

            <ProductItem
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            />

            <NumericInput onChange={value => console.log(value)} />

            <Text>Shop now!</Text>
            <TouchableOpacity
                activeOpacity={0.3}
                onPress={addToCartHandler}
               >
                <Image
                    style={styles.image}
                    source={{ uri: 'https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png' }}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey"
    },
    image: {
        width: 40,
        height: 40,
    },
});

