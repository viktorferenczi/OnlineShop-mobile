import React from 'react';
import Navigator from "./src/navigations/Navigator";
import { AsyncStorage }  from 'react-native';


export default function App() {

  // Create a local storage cart for the user if not exists
  //AsyncStorage.clear()
  try{
    const cart = JSON.parse(AsyncStorage.getItem("userCart"));
  } catch (error){
    AsyncStorage.setItem("userCart", JSON.stringify([""]));
  }

  // Unencrypted persistent key-value storage system that is global to the app.
  // Note: AsyncStorage has been extracted from react-native core and will be removed in a future release.
  return(
      <Navigator/>
  );
}
