import React, {useEffect, useState} from 'react';
import {AsyncStorage, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import FlatListItem from "../../components/cart/FlatListItem";


export const CartScreen = ({ navigation }) => {

    const [ProductList, setProductList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect( () => {
        async function getCart() {
            try {
                let productJsonList = [];
                let listOfProducts = JSON.parse(await AsyncStorage.getItem("userCart"));//get the cart


                for (let i= 0; i< listOfProducts.length; i++) {
                    let product = JSON.parse(listOfProducts[i]);
                    productJsonList.push(product);
                }

                setProductList(productJsonList);
            } catch (e) {
                setErrorMessage("You have no items in your cart :(");
            }
        }

        getCart();
        console.log(ProductList.length === 0);
    },[]);


    function getTotalAmount() {
        let totalAmount = 0;

        for (const product in ProductList) {
            totalAmount += product.price;
        }
        return totalAmount;
    }

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            {
                ProductList.length === 0
                ? <Text style={styles.errorMessage}>{errorMessage}</Text>
                : <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={ProductList}
                        renderItem={({item}) =>
                            <FlatListItem
                                item={item}
                                navigation={navigation}/>}
                    />
                    <View style={styles.horizontalLine}/>
                    <View>
                    <Text>TAX:</Text>
                    <Text>COUPON CODE:</Text>
                    <Text>Total Amount: {getTotalAmount()}$</Text>
                    </View>
                  </View>
            }

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    errorMessage: {
        marginTop: "70%",
        paddingLeft: 80,
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 30,
    },
});
