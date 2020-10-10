import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, StyleSheet, AsyncStorage} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import ProductItem from "../../components/product/ProductItem";
import NumericInput from 'react-native-numeric-input';


export const ProductItemScreen = ({ route, navigation }) => {

    const product = route.params;
    const [orderCount,setOrderCount] = React.useState(0);
    let itemFound = false;



    async function addToCartHandler(){
        //add to cart logic
        //if the product is in the cart, increment the value count by 1



        let listOfProducts = JSON.parse(await AsyncStorage.getItem("userCart")); //get the user cart

        console.log("after get:")
        console.log(listOfProducts);

        if(listOfProducts.length > 1 ) { //case : the user cart is not empty
            console.log("bemegy ahova nem kéne")
            for (let i = 0; i < listOfProducts.length;i++) { // going through the products
                console.log(listOfProducts[i])
                if(product.name ===  JSON.parse(listOfProducts[i]).name){ //the current product is in the cart
                    itemFound = true;
                    const product = JSON.parse(listOfProducts[i]);
                    product.quantity += orderCount; //add to order count to the quantity
                    listOfProducts[i] = JSON.stringify(product);
                    await AsyncStorage.setItem("userCart", JSON.stringify(listOfProducts)); //store in the cart
                }
            }
        }

        if(itemFound === false || listOfProducts.length === 1) { //case : our item is not found in the list or empty
            console.log("bemegy az ifbee")
            let cart = JSON.parse(await AsyncStorage.getItem("userCart")); // get the cart

            const itemToPurchase = JSON.stringify({
                id:product.id,
                name:product.name,
                price:product.price,
                image:product.image,
                quantity: orderCount
            });

            cart.push(itemToPurchase);

            await AsyncStorage.setItem("userCart", JSON.stringify(cart)); //push the item to cart

            //this route works fine
        }

        console.log("user cart after insert:");
        console.log(JSON.parse(await AsyncStorage.getItem("userCart")));

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

            <NumericInput onChange={ value => setOrderCount(value) } />

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
            <Text>asd</Text>
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

