import {Image, StyleSheet, Text, TouchableOpacity, SafeAreaView} from "react-native";
import React, {Component} from "react";
import Axios from "axios";


export default class FlatListItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
         <SafeAreaView>
             <Text>{this.props.item.name}</Text>
                <Image
                    source={{ uri: 'https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png' }}/>
                    <Text>Price:{this.props.item.price}$</Text>
            </SafeAreaView>
        );
    }
}


