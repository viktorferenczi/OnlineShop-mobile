import React, {useState} from "react";
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    AsyncStorage,
    KeyboardAvoidingView,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {StatusBar} from "expo-status-bar";
import axios from "axios";





export const RegisterScreen = ({ navigation }) => {

    const { control, handleSubmit, errors, getValues } = useForm();
    const [errorMessage, setErrorMessage] = useState("");

    const email = value => {
        let emailPattern = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        return value.length >= 3 && emailPattern.test(value) ;
    }



    const onSubmit = data => {
        let status;
        console.log(data);
        axios.post("http://authrestapi-env.eba-ithgd8xd.us-east-2.elasticbeanstalk.com/api/register",data)
            .then(function(response){
                console.log(response.status)
                if(response.status === 201){
                    setErrorMessage("");

                    //automatic login logic

                    navigation.navigate("Products");

                }
            })
            .catch(function (error){
                console.log(error.response.status);
                if(error.response && error.response.status === 409){
                    setErrorMessage("Email already exists!");
                } else if(error.request){
                    setErrorMessage("Oops! Looks like no response was received! Try again later.");
                }
            });
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" || "android" ? "padding" : "height"}  style={styles.container}>
            <View>
                <StatusBar style="dark" />
                {errorMessage !== "" && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                <Text style={styles.label}>Name*</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            autoCapitalize="none"
                            placeholder="Enter your name..."
                        />
                    )}
                    rules={{ required: true }}
                    name="name"
                    defaultValue=""
                />
                {errors.name && errors.name.type === "required" && <Text style={{ color:"red", marginLeft:30 }}>Name is required.</Text>}


                <Text style={styles.label}>Email*</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            autoCapitalize="none"
                            autoComplete="email"
                            placeholder="Email"
                        />
                    )}
                    rules={{ validate: email, required: true }}
                    name="email"
                    defaultValue=""
                />
                {errors.email && errors.email.type === "validate" && <Text style={{ color:"red", marginLeft:30 }}>Email must be in a correct format.</Text>}
                {errors.email && errors.email.type === "required" && <Text style={{ color:"red", marginLeft:30 }}>Email is required.</Text>}


                <Text style={styles.label}>Password*</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            placeholder="Password"
                        />
                    )}
                    rules={{ required: true }}
                    name="password"
                    defaultValue=""
                />
                {errors.password && errors.password.type === "required" && <Text style={{ color:"red", marginLeft:30 }}>Password is required.</Text>}


                <Text style={styles.label}>Address</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            autoCapitalize="none"
                            placeholder="Enter your address...(optional)"
                        />
                    )}
                    name="address"
                    defaultValue=""
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    label: {
        color: "black",
        margin: 10,
        marginLeft:30,
    },
    button: {
        marginTop: 40,
        height: 48,
        borderRadius: 43,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
        backgroundColor: "lightgrey"
    },
    input: {
        backgroundColor: "white",
        borderColor: 'white',
        height: 40,
        padding:10,
        borderRadius: 60,
        marginLeft:20,
        marginRight:20
    },
    errorMessage: {
        color:"red",
        margin: 10,
        marginLeft:30,
    }
});

