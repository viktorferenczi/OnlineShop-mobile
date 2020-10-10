import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, StyleSheet, AsyncStorage} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import ProductItem from "../../components/product/ProductItem";
import NumericInput from 'react-native-numeric-input';
import insert from "../../actions/insertIntoCart";


export const ProductItemScreen = ({ route, navigation }) => {

    const product = route.params;
    const [orderCount,setOrderCount] = React.useState(0); //order count from input
    const [errorText, setErrorText] = React.useState(""); //error text in case of 0 input
    let itemFound = false; // product search in cart

    // orderCount input handling
    function handleOrderCount(value){
        setOrderCount(value);
        if(value !== 0)
            setErrorText("");
    }

    // addToCart button (icon) handling
    async function addToCartHandler(){
        //if the product is in the cart, increment the value count by 1, if it is not, place the product in the cart
        if(orderCount <= 0) {
            setErrorText("Please enter a number greater than 0!"); //make sure to not put quantity 0 in the cart
        } else {
            await insert(itemFound, product, orderCount); // add to cart
            navigation.navigate("Products");
        }
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
            <Text>Please enter the amount of {product.name} you want to buy.</Text>

            <View style={styles.input}>
                <NumericInput onChange={ value => handleOrderCount(value) } />
                {errorText !== "" && <Text style={styles.errorText}>{errorText}</Text>}
            </View>

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
    },
    image: {
        width: 40,
        height: 40,
        borderColor: "black",
        borderWidth: 3,
    },
    errorText: {
        color: "red"
    },
    input : {
        marginTop: 30,
        paddingBottom: 42,
    }
});

