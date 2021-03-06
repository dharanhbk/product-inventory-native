import React,{useState} from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import Axios from 'axios';





export default function AddProduct({navigation}){

   
        
    const [name,setName]= useState('');
    const [category,setCategory]= useState('');
    const [price,setPrice]= useState('');
    const [quantity,setQuantity]= useState('');
    const [image,setImage]= useState('');

    const submitHandler = (name,image,price,quantity,category)=>{
    let newProd= {
            product_name:name,
            image:image,
            price:price,
            category:category,
            quantity:quantity
        };   

        Axios.post("http://localhost:3000/products",newProd)
        .then(res=> navigation.navigate('Dashboard'))

    
    }

    let nameChangeHandler=(val)=>{
       setName(val); 
    }
    let priceChangeHandler=(val)=>{
        setPrice(val);
    }
    const categoryChangeHandler=(val)=>{
        setCategory(val);
    }               
    const quantityChangeHandler=(val)=>{
        setQuantity(val);
    }
  const handleChoosePhoto=(val)=>{
        setImage(val);
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
            <TextInput
                style={mystyle.login}
                placeholder="Image URL"
                onChangeText={handleChoosePhoto}
            />  
            <Button 
                title='add product'
                color="coral"
                onPress={()=>submitHandler(name,image,price,quantity,category)}
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