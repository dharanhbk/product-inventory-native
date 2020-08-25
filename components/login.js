import React, { useState } from 'react';
import { View,StyleSheet, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Login({navigation}){
     const [name, setName] = useState('')
     const [password, setPassword] = useState('')
     const [valid, setValid] = useState('')

    const nameChangeHandler=(val)=>{
        setName(val)  
        setValid('false')
    }
    const passwordChangeHandler=(val)=>{
        setPassword(val)
        setValid('false')
    }
    const submitHandler=(name,password)=>{
        if(name==='Dharan' &&password==='123' ){
            console.log("pass")
            setValid('true')
            navigation.navigate('Dashboard')
        }
        else{
            setValid('false')
            Alert.alert("Invalid User!","Enter valid Login details",[
                {text:'OK',onPress:()=>console.log("Alert")}
            ])
        }    
    }

    return(
        <View>
            <TextInput
                style={mystyle.login}
                placeholder="username"
                onChangeText={nameChangeHandler}
            />
             <TextInput
                style={mystyle.login}
                placeholder="Password"
                secureTextEntry
               onChangeText={passwordChangeHandler}
            />
            <Button 
                title='Login'
                color="coral"
                onPress={()=>{ submitHandler(name,password) }}
            /> 
        </View>
    )
}

const mystyle= StyleSheet.create({
    login:{
        margin:10,
        padding:15,
        borderWidth:1,
        borderColor:'#ddd',
        textAlign:'center'
    }
})