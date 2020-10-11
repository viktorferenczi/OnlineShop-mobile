import {Card} from "react-native-elements";
import {Image, StyleSheet, Text, TouchableOpacity, Alert} from "react-native";
import Swipeout from 'react-native-swipeout';
import React, {Component} from "react";
import insert from "../../actions/insertIntoCart";


export default class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.handleViewItem = this.handleViewItem.bind(this);
    }

    handleViewItem(){
        this.props.navigation.navigate("Product",
            {
                id:this.props.item.id,
                name:this.props.item.name,
                price:this.props.item.price,
                image:this.props.item.image,
            });
    }

    render() {
        function imageClickHandle(){
            //bigger image logic
            console.log("bigger image");
        }

        const swipeSettings = {
            autoClose:true,
            right:[
                {
                    backgroundColor:"green",
                    text: 'Add to cart',
                    onPress: async () => {
                        let itemFound = false;
                        let product = {
                            id:this.props.item.id,
                            name:this.props.item.name,
                            image:this.props.item.image,
                            price:this.props.item.price
                        }
                        await insert(itemFound, product, 1); //add to cart
                        Alert.alert(product.name + " was successfully added to your cart. For large amount of purchase, please tap on the item.")
                    }
                }
            ],
        }

        return (
            <Swipeout {...swipeSettings}>
                <TouchableOpacity
                    activeOpacity={2}
                    onPress={this.handleViewItem}
                >
                <Card containerStyle={{width: "100%", margin: 0, borderBottomColor: "black", height: 160}}>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <Card.Divider/>
                    <TouchableOpacity
                        activeOpacity={3}
                        onPress={imageClickHandle}
                        style={styles.TouchableOpacityStyle}>
                        <Image
                            style={styles.ProductImageStyle}
                            source={{ uri: this.props.item.image }}
                        />
                    </TouchableOpacity>
                    <Text>Price:{this.props.item.price}${"\n"}</Text>
                </Card>
            </TouchableOpacity>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    ProductImageStyle: {
        width: 50,
        height: 50,
    },
    TouchableOpacityStyle: {
        width: 75,
        height: 75,
    },
});

