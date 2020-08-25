import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProductDetails(item){
    console.log(item);
    const detail = item.route.params.item
    return(
        <View style={styles.content}>
            <Image source={{uri:detail.image}} style={{width: 200, height: 150}} />
            <Text style={styles.list}> Product name: {detail.product_name} </Text>
            <Text style={styles.list}> Product Category: {detail.category} </Text>
            <Text style={styles.list}> Price : {detail.price} </Text>
            <Text style={styles.list}> Quantity: {detail.quantity} </Text><br></br>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        backgroundColor:'lightblue',
        padding:40,
        margin:20
    },
    list:{
        fontSize:20,
        color:"brown"
    }
})