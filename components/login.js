import React from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';

export default function Login() {
    return (
       <View style={styles.profile}>
           <Image style={{ width: 100, height: 100 }} source={require('../assets/user.png')}/>
            <TextInput 
                style={styles.input}
                placeholder='Usuário'
            />
            <TextInput 
                style={styles.input}
                placeholder='Senha'
            />
            <View style={styles.botoes}>
            <Button 
                title= 'Login'
                color= '#1e90ff'
            />
            </View>
            <View style={styles.botoes}>
             <Button 
                title= 'Cadastro'
                color= '#1e90ff'
            />
            </View>
            
       </View> 
    )
}
const styles = StyleSheet.create({
    profile:{
        alignItems:'center',
        paddingTop: '30%'
    },
    input:{
        paddingTop:'20%',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    botoes:{
    paddingTop:20,
    width:100
    }
        
    })