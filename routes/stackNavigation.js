import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from '../components/home'
import AddProduct from '../components/addProduct';
import ProductDetails from '../components/productDetails';
import Login from '../components/login';
import EditProduct from '../components/editProduct';



const Stack = createStackNavigator()

function MyStackNavigator(){

    return (

        <NavigationContainer>

            <Stack.Navigator initialRouteName='LOGIN' 

                            screenOptions={{
                                gestureEnabled:true,
                                headerStyle:{
                                    backgroundColor:'coral',
                                    height:100
                                }
                                }} 
                                headerMode='float'
                               >
                <Stack.Screen name="Product Inventory System" component={Login}></Stack.Screen>
                <Stack.Screen name="Dashboard" component={Home}></Stack.Screen>
                <Stack.Screen name="Add product" component={AddProduct}></Stack.Screen>
                <Stack.Screen name="Edit product" component={EditProduct}></Stack.Screen>
                <Stack.Screen name="Product Details" component={ProductDetails}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator