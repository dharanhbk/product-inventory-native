import React,{useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList,TouchableOpacity, TouchableWithoutFeedback ,Keyboard} from 'react-native';

import Axios from 'axios';



export default function Home({navigation}) {
  
 
  const [products, setProducts] = useState([])

useEffect(()=>{
    Axios.get("http://localhost:3000/products")
    .then(res=>{
        setProducts(res.data)
    })
},[])
// const submitHandler = (name,price,quantity,category)=>{
//   setProducts((prevProduct)=>{
//     return [...prevProduct,
//       {
//         product_name:name,
//         id:Math.random().toString(),
//         quantity:quantity,
//         category:category,
//         price:price
//       }]
//   })
// }
     
// const deleteProd=(id)=>{
//   console.log("deleted")
//    setProducts((prevProduct)=>{
//      return prevProduct.filter(p=>p.id!=id)
//    })
// }


  return (
  <ScrollView>
      <View style={styles.container}>
                <TouchableOpacity 
            onPress={()=>{navigation.navigate('Add product')}}      >
            <Text style={styles.add}>+Add product</Text>
            </TouchableOpacity>
        <View stye={styles.content}>
          <View style={styles.list  }>
              <FlatList 
                numColumns={1}
                keyExtractor={(item)=>item.id}
                data={products}
                renderItem={({item})=>(
                  <TouchableOpacity onPress={()=>navigation.navigate('Product Details',{item:item})}>
                    <Text style={styles.item}>{item.product_name}<br></br>
                    Quantity- {item.quantity}
                    </Text><br></br>
                    
                  </TouchableOpacity>
                )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff'
        },
        content:{
          padding:40
        },
        list:{
          margin:20
        },
        item:{
          backgroundColor:'white',
          marginTop:16,
          padding:20,
          fontSize:24,
          textAlign:'center',
          borderColor:"#bbb",
          borderWidth:1,
          borderStyle:'dashed',
          borderRadius:10,
          backgroundColor:'lightblue'
        },
        add:{
            backgroundColor:'lightgrey',
            margin:20,
            padding:20,
            textAlign:'center',
            fontWeight:'bold'
        }
      });
