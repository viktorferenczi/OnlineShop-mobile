import React, {useEffect, useState} from "react";
import Axios from "axios";
import {
    ActivityIndicator,
    FlatList, Image,
    RefreshControl,
    SafeAreaView,
    StatusBar, StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import FlatListItem from "../../components/products/FlatListItem";

export const ProductsScreen = ({ navigation }) => {

    const [Loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const [ProductList, setProductList] = useState([]);


    useEffect(  () => {
        Axios.get("http://authrestapi-env.eba-ithgd8xd.us-east-2.elasticbeanstalk.com/api/products")
            .then(response => {
                setProductList(response.data);
                setLoading(false);
            });
        setLoading(false);
    },[]);

    //refresh
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        Axios.get("http://authrestapi-env.eba-ithgd8xd.us-east-2.elasticbeanstalk.com/api/products")
            .then(response => {
                setProductList(response.data);
            });
        setRefreshing(false);
    }, [refreshing]);


    //cart icon onclick
    const cartClickHandler = () => {
        //navigate to cart
        navigation.navigate("Cart");
    }

    const flatListRef = React.useRef(); //flatlist refresh

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {true}/>

            {Loading ? <ActivityIndicator  style={{height:200}} /> : <View style={{borderBottomColor: "black"}}/>}

            {ProductList != null && (
                <FlatList
                    ref={flatListRef}
                    showsVerticalScrollIndicator={false}
                    data={ProductList}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                    renderItem={({item}) =>
                        <FlatListItem
                            item={item}
                            refresh={onRefresh}
                            navigation={navigation}/>}
                />
            )}

            <TouchableOpacity
                activeOpacity={0.3}
                onPress={cartClickHandler}
                style={styles.TouchableOpacityStyle}>
                <Image
                    source={{ uri: 'https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png' }}
                    style={styles.FloatingButtonStyle}
                />
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        borderRadius:44,
        backgroundColor: "lightblue",
    }
});

