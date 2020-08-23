import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductDetails(item){
    console.log(item);
    const detail = item.route.params.item
    return(
        <View style={styles.content}>
            <Text style={styles.list}> Product name: {detail.product_name} </Text>
            <Text style={styles.list}> Product Category: {detail.category} </Text>
            <Text style={styles.list}> Price : {detail.price} </Text>
            <Text style={styles.list}> Quantity: {detail.quantity} </Text>
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
        fontSize:20
    }
})