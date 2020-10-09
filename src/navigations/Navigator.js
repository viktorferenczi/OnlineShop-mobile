import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { HomeScreen } from '../screens/HomeScreen';

import { RegisterScreen } from "../screens/auth/RegisterScreen";
import { LoginScreen } from "../screens/auth/LoginScreen";

import { ProductsScreen } from "../screens/products/ProductsScreen";
import { ProductItemScreen } from "../screens/products/ProductItemScreen";

import { CartScreen } from "../screens/userCart/CartScreen";



const Stack = createStackNavigator();


export default function Navigator() {
    return(
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Home' }}
                    />

                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{ title: 'Sign up' }}
                    />

                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ title: 'Sign in' }}
                    />

                    <Stack.Screen
                        name="Product"
                        component={ProductItemScreen}
                        options={{ title: 'View Product' }}
                    />

                    <Stack.Screen
                        name="Products"
                        component={ProductsScreen}
                        options={{ title: 'Products' }}
                    />

                    <Stack.Screen
                        name="Cart"
                        component={CartScreen}
                        options={{ title: 'Your Cart' }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
    );
}
