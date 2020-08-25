import React,{useState} from 'react';
import { View, TextInput, StyleSheet,Button } from 'react-native';
import Axios from 'axios';


export default function EditProduct(item){

    const detail = item.route.params.item
    
    const [name,setName]= useState(detail.product_name);
    const [category,setCategory]= useState(detail.category);
    const [price,setPrice]= useState(detail.price);
    const [quantity,setQuantity]= useState(detail.quantity);
    const [image,setImage]= useState(detail.image);

    

    const submitHandler = (name,image,price,quantity,category)=>{
        console.log("submit called")
    let newProd= {
            id:detail.id,
            product_name:name,
            image:image,
            price:price,
            category:category,
            quantity:quantity
        };   
    console.log(newProd)
        Axios.put("http://localhost:3000/products/"+detail.id,newProd)
        .then(res=>{ 
            item.navigation.navigate('Dashboard')})
            .catch(e=>console.log(e))
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
                defaultValue={detail.product_name}
            />
             <TextInput
                style={mystyle.login}
                defaultValue={detail.category}
                placeholder="Category"
                onChangeText={categoryChangeHandler}
            />
            <TextInput
                style={mystyle.login}
                defaultValue={detail.quantity}
                keyboardType='number-pad'
                placeholder="Quantity"
                onChangeText={quantityChangeHandler}
            />
            <TextInput
                style={mystyle.login}
                defaultValue={detail.price}
                placeholder="Price"
                keyboardType='number-pad'
                onChangeText={priceChangeHandler}
            /> 
            <TextInput
                style={mystyle.login}
                defaultValue={detail.image}
                placeholder="Image URL"
                onChangeText={handleChoosePhoto}
            />  
            <Button 
                title='Save product'
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