import {Card} from "react-native-elements";
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import React, {Component} from "react";


export default class FlatListItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <SafeAreaView>
                <Card containerStyle={styles.container}>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <Card.Divider/>
                    <Image
                        style={styles.ProductImageStyle}
                        source={{ uri: 'https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png' }}
                    />
                    <Text>Price:{this.props.item.price}${"\n"}</Text>
                    <Text>Quantity: {this.props.item.quantity}</Text>
                </Card>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    ProductImageStyle: {
        width: 50,
        height: 50,
    },
    container: {
        width: "60%",
        marginLeft: "20%",

    }
});

