import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { AsyncStorage } from 'react-native';


export const HomeScreen = ({ navigation }) => {

    const [isLoading,setIsLoading] = useState(true);
    const authenticated = !AsyncStorage.getItem('@app:session');

    // loading test
    useEffect(()=> {
        setTimeout(() => { // request here
            setIsLoading(false);
        },2000);
    }, []);

    if(isLoading) {
        return (
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                <StatusBar style="dark" />
                <ActivityIndicator size="large" />
            </View>
        );
    }


    return (
            <SafeAreaView style={styles.container}>
                <StatusBar style="dark" />
                <Text>test</Text>
                {
                    authenticated ?
                        <View>
                            <Button title="View Profile" onPress={ () => navigation.navigate('Profile')}/>
                        </View>
                :
                        <View>
                            <Button title="Register" onPress={ () => navigation.navigate('Register')}/>
                            <Button title="Login" onPress={ () => navigation.navigate('Login')}/>
                        </View>
                }
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
