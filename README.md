
# React-native-webshop

- Easy to understand and use design.
- Fast and lightweight implementation.
- Multiplatform between IOS and Android.

# Tech
- [React Native] :  Create native apps for Android and iOS.
- [Github] : Versioncontrol.
- [WebStorm] : Lightning fast IDE by Jetbrains.
- [Expo] : Open-source platform for making universal native app

## Dependencies

- [Masked view] : Masking element objects.
- [React-navigation/stack] : Routing and navigation for React Native apps
- [Expo-status-bar]: Provides the same interface as the React Native StatusBar API, but with slightly different defaults to work great in Expo environments.
- [React-native-elements]: The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native.
- [React-native-form-validator]: React native form validator is a simple library to validate your form fiels with React Native.
- [React-native-keyboard-aware-scroll-view]:  A ScrollView component that handles keyboard appearance and automatically scrolls to focused TextInput.
- [React-native-numeric-input]: A cross platform stylish numeric input for react native.
- [React-native-screens]: Routing and navigation for React Native apps.


## devDependencies

- [React-hook-form]: Performant, flexible and extensible forms with easy to use validation
- [React-native-swipeout]: iOS-style swipeout buttons that appear from behind a component.
# Demo
<img src="https://media1.giphy.com/media/4nQ9QZSn9tLhKgrPYJ/giphy.gif">

------

# Lumen Back-end API

## Rundown

- Fast and Lightweight implementation.
- AWS Deployed online availability.
- MySQL Database connection.


## Tech

Used technologies for this project:

* [PHP] - For the best web apps!
* [PHP Storm] - Awesome PHP text editor by Jetbrains.
* [Lumen] - Lightning fast API development.
* [MySQL] - Oracles awesome database.
* [Postman] - Every back-end developers favorite front-end.
* [AWS] - reliable, scalable, and inexpensive cloud computing services. 

## Routes & functionality
|Entity|Type|Route|Description|Success|Failure|
|----|----|----|----|----|-----|
| User | POST | /api/login | Authenticates the User |200 OK  | 401 Unauthorized |
| | POST| /api/logout | Logs the User out | 200 OK | 400 Bad Request |
| | POST| /api/register | Registers the User into the database. | 201 Created | 409 Conflict, 400 Bad Request |
| |GET | /api/users | Lists the Users out from the database | 200 OK | 400 Bad Request |
| |POST | /api/user | Returns the User with the given api_key | 200 OK | 400 Bad Request, 404 Not Found |
| | POST|/api/user/update/address | Updates the users address with the api_key given | 200 OK | 400 Bad Request |
|Product|POST|/api/products/create|Creates a Product in the database | 201 Created| 400 Bad Request |
||GET|/api/products|Lists all the Product from the database|200 OK| 400 Bad Request| 
||GET|/api/products/{id} |Returns the Products with the given ID  | 200 OK | 400 Bad Request, 404 Not Found|
|Configuration|GET|database/migrate|Configures the database with the migration files| 200 OK | 400 Bad Request |

## Usage

>Tha API and the MySQL Database are connected and both of them are deployed on AWS. Requests are handeled online for the React Native Webshop homework application.

## Challenges
> The time constraint made it really hard to do an exhaustive test phase. To write both the back-end and front-end, switching the mindset was rather challenging and exhausting, and deploying it on AWS made the project even more complex.

## License
Created by Ferenczi Károly Viktor, Free to use, free to modify, free to share.


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Github]: <https://github.com/>
   [Expo]: <https://expo.io/>
   [WebStorm]: <https://www.jetbrains.com/webstorm/>
   [React Native]: <https://reactnative.dev/>
   [Masked View]: <https://github.com/react-native-community/react-native-masked-view>
   [React-navigation/stack]: <https://github.com/react-navigation/react-navigation>
   [Expo-status-bar]: <https://docs.expo.io/versions/latest/sdk/status-bar/>
   [React-native-elements]: <https://libraries.io/npm/react-native-elements>
   [React-native-form-validator]: <https://www.npmjs.com/package/react-native-form-validator>
   [React-native-keyboard-aware-scroll-view]: <https://www.npmjs.com/package/react-native-keyboard-aware-scroll-view>
   [React-native-numeric-input]: <https://www.npmjs.com/package/react-native-numeric-input>
   [React-native-screens]: <https://www.npmjs.com/package/react-native-screens?activeTab=versions>
   [React-hook-form]: <https://github.com/react-hook-form/react-hook-form>
   [React-native-swipeout]: <https://www.npmjs.com/package/react-native-swipeout/v/2.3.6>
   [MySQL]: <https://www.mysql.com/>
   [Github]: <https://github.com/>
   [Postman]: <https://www.postman.com/>
   [Php]: <https://www.php.net/>
   [PHP storm]: <https://www.jetbrains.com/phpstorm/>
   [Lumen]: <https://lumen.laravel.com/>
   [AWS]: <https://aws.amazon.com/>
