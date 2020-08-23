import React,{useState,useEffect} from 'react';
import { View, TextInput, StyleSheet, Text, Button, ImagePickerIOS } from 'react-native';
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default function AddProduct({navigation}){

   
        
    const [name,setName]= useState('');
    const [category,setCategory]= useState('');
    const [price,setPrice]= useState('');
    const [quantity,setQuantity]= useState('');
    // let newProd= {
    //     product_name:"",
    //     price:0,
    //     category:"",
    //     quantity:0
    // };

const submitHandler = (name,price,quantity,category)=>{
 let newProd= {
        product_name:name,
        price:price,
        category:category,
        quantity:quantity
    };   

    Axios.post("http://localhost:3000/products",newProd)
    .then(res=> navigation.navigate('Dashboard'))

   
}

    let nameChangeHandler=(val)=>{
       setName(val); 
    //    newProd.product_name=val;
    //    console.log(newProd)
    }
    let priceChangeHandler=(val)=>{
        setPrice(val);
        // newProd.price=val;
        // console.log(newProd)
    }
    const categoryChangeHandler=(val)=>{
        setCategory(val);
        // newProd.category=val
        // console.log(newProd)
    }               
    const quantityChangeHandler=(val)=>{
        setQuantity(val);
        // newProd.quantity=val;
        // console.log(newProd)
    }
  const handleChoosePhoto=()=>{

  }

    return(
        <View>
            
            <TextInput
                style={mystyle.login}
                placeholder="Product name"
                onChangeText={nameChangeHandler}
            />
             <TextInput
                style={mystyle.login}
                placeholder="Category"
                onChangeText={categoryChangeHandler}
            />
            <TextInput
                style={mystyle.login}
                keyboardType='number-pad'
                placeholder="Quantity"
                onChangeText={quantityChangeHandler}
            />
            <TextInput
                style={mystyle.login}
                placeholder="Price"
                keyboardType='number-pad'
                onChangeText={priceChangeHandler}
            /> 
            <Button 
                title='Chooed Image'
                color="grey"
                onPress={handleChoosePhoto}
            />  
            <Button 
                title='add product'
                color="coral"
                onPress={()=>submitHandler(name,price,quantity,category)}
            />   
        </View>

    )
}

const mystyle= StyleSheet.create({
    login:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})