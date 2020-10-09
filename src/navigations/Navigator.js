import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { RegisterScreen } from "../screens/RegisterScreen";
import { ProductsScreen } from "../screens/ProductsScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { CartScreen } from "../screens/CartScreen";
import { ProductItemScreen } from "../screens/CartScreen";



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
                        name="Profile"
                        component={ProfileScreen}
                        options={{ title: 'Your Profile' }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
    );
}
