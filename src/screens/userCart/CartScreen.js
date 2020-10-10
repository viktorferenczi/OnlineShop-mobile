import React, {useEffect, useState} from 'react';
import {
    AsyncStorage,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
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

        for (let i = 0; i < ProductList.length; i++) {
            console.log("product: " + ProductList[i].name)
            totalAmount += ProductList[i].price * ProductList[i].quantity;
        }
        return totalAmount;
    }

    async function handlePurchase(){
        Alert.alert("Purchase complete");
        await AsyncStorage.setItem("userCart", JSON.stringify([""])); // empty the cart
        navigation.navigate("Products");
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" || "android" ? "padding" : "height"} style={{ flex:1}}>
            <StatusBar style="dark" />
            {
                ProductList.length === 0
                ? <Text style={styles.errorMessage}>{errorMessage}</Text>
                : <View>
                    <View style={{ marginBottom:390 }}>
                        <FlatList
                            showsVerticalScrollIndicator={true}
                            data={ProductList}
                            renderItem={({item}) =>
                                <FlatListItem
                                    item={item}
                                    navigation={navigation}/>}
                        />
                        <View style={{marginBottom:10}}>
                            <View style={styles.horizontalLine}/>
                            <View>
                                <Text>TAX:</Text>
                                <Text>COUPON CODE:</Text>
                                <Text>Total Amount: {getTotalAmount()}$</Text>
                            </View>
                            <Text>Address</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => console.log("test")}
                                autoCapitalize="none"
                                placeholder="Enter your address..."
                            />
                            <Button title="Purchase" onPress={handlePurchase}/>
                        </View>
                    </View>
                  </View>
            }
        </KeyboardAvoidingView>
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
    container: {
        flex:1
    },
    input: {
        backgroundColor: "white",
        borderColor: 'black',
        height: 40,
        padding:10,
        borderRadius: 10,
    }
});
