import React from 'react';
import { AsyncStorage } from 'react-native';

export default async function insert(itemFound,product,orderCount) {
    let listOfProducts = JSON.parse(await AsyncStorage.getItem("userCart")); //get the user cart

    //case : the user cart is not empty
    if( (listOfProducts.length >= 1 && listOfProducts[0] !== "")  || listOfProducts[0] !== "" ) {
        for (let i = 0; i < listOfProducts.length;i++) { // going through the products
            if(product.name ===  JSON.parse(listOfProducts[i]).name){ //the current product is in the cart
                itemFound = true; //we have found our item
                const product = JSON.parse(listOfProducts[i]);
                product.quantity += orderCount; //add to order count to the quantity
                listOfProducts[i] = JSON.stringify(product);
                await AsyncStorage.setItem("userCart", JSON.stringify(listOfProducts)); //store in the cart
            }
        }
    }

    //case : our item is not found in the cart or empty cart
    if((itemFound === false && (listOfProducts.length === 1 || listOfProducts[0] === "")) || (itemFound === false && listOfProducts.length > 1)) {
        let cart = JSON.parse(await AsyncStorage.getItem("userCart")); // get the cart

        const itemToPurchase = JSON.stringify({
            id:product.id,
            name:product.name,
            price:product.price,
            image:product.image,
            quantity: orderCount
        });

        cart.push(itemToPurchase);
        if(listOfProducts[0] === "") {
            // remove the empty item from our list (localstorage cart creation. App.js line:13
            cart = cart.slice(1);
        }

        await AsyncStorage.setItem("userCart", JSON.stringify(cart)); //push the item to cart
    }

}
