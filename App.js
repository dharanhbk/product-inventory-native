import React,{useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList,TouchableOpacity, TouchableWithoutFeedback ,Keyboard} from 'react-native';


import Axios from 'axios';

import MyStackNavigator from './routes/stackNavigation';


export default function App() {
  
 
  


  return (
  
      <View style={styles.container}>

        <MyStackNavigator />
      </View>
   
  );
}

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignContent:'center',
          justifyContent:'center'
        },
       
      });
