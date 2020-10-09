import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import ProductItem from "../../components/product/ProductItem";
import NumericInput from 'react-native-numeric-input';


export const ProductItemScreen = ({ navigation }) => {

   function addToCartHandler(){
        //add to cart
       //redirect to productsScreen
    }

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <ProductItem
            id={this.props.item.id}
            name={this.props.item.name}
            price={this.props.item.price}
            image={this.props.item.image}
            />

            <NumericInput onChange={value => console.log(value)} />

            <Text>Shop now!</Text>
            <TouchableOpacity
                activeOpacity={0.3}
                onPress={addToCartHandler}
               >
                <Image
                    source={{ uri: 'https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png' }}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    label: {
        color: "black",
        margin: 10,
        marginLeft:30,
    },
    button: {
        marginTop: 40,
        height: 48,
        borderRadius: 43,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",

    },
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
        backgroundColor: "lightgrey"
    },
    input: {
        backgroundColor: "white",
        borderColor: 'white',
        height: 40,
        padding:10,
        borderRadius: 60,
        marginLeft:20,
        marginRight:20
    }
});


