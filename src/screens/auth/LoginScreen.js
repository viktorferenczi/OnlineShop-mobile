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
    TouchableWithoutFeedback,
    Button,
    SafeAreaView,
    ImageBackground
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {StatusBar} from "expo-status-bar";

//middleware
import {authenticated} from "../../middlewares/auth";
import axios from "axios";

export const LoginScreen = ({ navigation }) => {

    const { control, handleSubmit, errors, getValues } = useForm();
    const [errorMessage, setErrorMessage] = useState("");



    const email = value => {
        let emailPattern = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        return value.length >= 3 && emailPattern.test(value) ;
    }

    const onSubmit = data => {
        console.log(data);
        axios.post("http://authrestapi-env.eba-ithgd8xd.us-east-2.elasticbeanstalk.com/api/login",data)
            .then(function(response){
                console.log(response);
                if(response.status === 200){
                    setErrorMessage("");

                    AsyncStorage.setItem("@app:session", JSON.stringify({"api":response.data.api_key}));  // set token for the user
                    navigation.navigate("Products");
                }
            })
            .catch(function (error){
                console.log(error.response.status);
                if(error.response && error.response.status === 401){
                    setErrorMessage("Email or password is not correct!");
                } else if(error.request){
                    setErrorMessage("Oops! Looks like no response was received! Try again later.");
                }
            });
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" || "android" ? "padding" : "height"}  style={styles.container}>
            <StatusBar style="dark" />

                {errorMessage !== "" && <Text style={styles.error}>{errorMessage}</Text>}

            <Text style={styles.label}>Email</Text>
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
                        placeholder="Enter your email..."
                    />
                )}
                rules={{ validate: email, required: true }}
                name="email"
                defaultValue=""
            />
            {errors.email && errors.email.type === "validate" && <Text style={{ color:"red", marginLeft:30 }}>Email must be in a correct format.</Text>}
            {errors.email && errors.email.type === "required" && <Text style={{ color:"red", marginLeft:30 }}>Email is required.</Text>}


            <Text style={styles.label}>Password</Text>
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
                        placeholder="Enter your password..."
                    />
                )}
                rules={{ required: true }}
                name="password"
                defaultValue=""
            />
            {errors.password && errors.password.type === "required" && <Text style={{ color:"red", marginLeft:30 }}>Password is required.</Text>}


            <View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.buttonText}>
                    <Button title="Not a user yet? Register here" onPress={ () => navigation.navigate('Register') }/>
                </View>

                <View style={styles.buttonText}>
                    <Button title="Continue" onPress={ () => navigation.navigate('Products') }/>
                </View>
            </View>

                </KeyboardAvoidingView>
        </SafeAreaView>
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
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    buttonText: {
        marginTop: 20,
        height: 40,
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
    error: {
        color:"red",
        margin: 10,
        marginLeft:30,
    }
});
