import {Card} from "react-native-elements";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import Swipeout from 'react-native-swipeout';
import React, {Component} from "react";
import Axios from "axios";


export default class FlatListItem extends Component {
    constructor(props) {
        super(props);
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
                    /*onPress: () => {
                        Axios.delete(
                            "" + this.props.item.id
                        ).then(this.props.refresh);
                    }*/
                }
            ],
        }

        return (
            <Swipeout {...swipeSettings}>
                <Card containerStyle={{width: "100%", margin: 0, borderBottomColor: "black", height: 160}}>

                    <Card.Title>{this.props.item.name}</Card.Title>
                    <Card.Divider/>

                    <TouchableOpacity
                        activeOpacity={3}
                        onPress={imageClickHandle}
                        style={styles.TouchableOpacityStyle}>
                        <Image
                            style={styles.ProductImageStyle}
                            source={{ uri: 'https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png' }}
                        />
                    </TouchableOpacity>
                    <Text>Price:{this.props.item.price}${"\n"}</Text>
                </Card>
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

