import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList,TouchableOpacity,Image} from 'react-native';
import Axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';



export default function Home({navigation}) {
  
 
  const [products, setProducts] = useState([])
  const [productsearch, setProductsSearch] = useState([])
  const isFocused = useIsFocused();

  const getProduct=()=>{
    Axios.get("http://localhost:3000/products")
    .then(res=>{
        setProducts(res.data)
        setProductsSearch(res.data)
    })
  }

  useEffect(()=>{
      getProduct()
  },[isFocused])

  const deleteProduct=(id)=>{
    Axios.delete("http://localhost:3000/products/"+id)
    .then(res=>getProduct())
  }

  const searchProduct=(val)=>{
    console.log(val)
    console.log(products)
    if(val===' '){
        return products
    }
    else{
      let searchFound = productsearch.filter(found=>{
        return found.product_name.toLowerCase().match(val.toLowerCase().trim())
    })
    setProducts(searchFound)
    } 
  }


  return (
  <ScrollView>
      <View style={styles.container}>
                <TouchableOpacity 
            onPress={()=>{navigation.navigate('Add product')}}      >
            <Text style={styles.add}>+Add product</Text><br></br>
            </TouchableOpacity>
            <TextInput style={styles.login} 
            onChangeText={searchProduct}
            placeholder="Search Product"></TextInput>
        <View stye={styles.content}>
          <View style={styles.list  }>
              <FlatList 
                numColumns={1}
                keyExtractor={(item)=>item.id}
                data={products}
                renderItem={({item})=>(
                  <TouchableOpacity onPress={()=>navigation.navigate('Product Details',{item:item})}>
                    <Text style={styles.item}>{item.product_name}<br></br><br></br>
                    <Image source={{uri:item.image}} style={{width: 200, height: 150}} /><br></br><br></br>
                    <Button title="Edit"  onPress={()=>{navigation.navigate('Edit product',{item:item})}} ></Button>&nbsp;&nbsp; 
                    <Button title="Delete" color="red" onPress={()=>deleteProduct(item.id)} ></Button>
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
          color:'brown',
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
        },
        login:{
          margin:10,
          padding:8,
          borderWidth:1,
          borderColor:'#ddd'
      }
        
});
