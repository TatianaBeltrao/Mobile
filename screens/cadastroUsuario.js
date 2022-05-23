import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import Navigator from '../rotas/homeStack';

export default function CadastroUsuario() {

    return (
       <View style={styles.profile}>
           
            <TextInput 
                style={styles.input}
                placeholder='Nome'
            />
            <TextInput 
                style={styles.input}
                placeholder='CPF'
            />
             <TextInput 
                style={styles.input}
                placeholder='Email'
            />
             <TextInput 
                style={styles.input}
                placeholder='Senha'
            />
            <View style={styles.botoes}>
            <Button 
                title= 'Salvar'
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