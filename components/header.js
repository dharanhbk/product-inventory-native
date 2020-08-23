import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(){
   return(
   <View style={mystyle.header}>
        <Text style={mystyle.heading}>
            PRODUCT INVENTORY SYSTEM
        </Text>
    </View>
   )
}

const mystyle=StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:"coral"
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:"center",
        color:'#fff'
    }
})