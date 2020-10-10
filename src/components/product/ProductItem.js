import {Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, View} from "react-native";
import React, {Component} from "react";
import Axios from "axios";


export default class ProductItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
         <SafeAreaView>
             <Text style={styles.name}>{this.props.name}</Text>
             <View style={styles.imageView}>
                 <Image
                 style={styles.image}
                 source={{ uri: 'https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png' }}/>
             </View>
                    <Text style={styles.price}>Price:{this.props.price}$</Text>
             <View style={styles.horizontalLine}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    imageView : {
        marginLeft: "2%",
    },
    name: {
        marginTop: "5%",
        marginLeft: "45%",

    },
    price: {
        paddingTop:22,
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 30
    }
});


