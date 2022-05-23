import * as React from 'react';
import react, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import axios from 'axios';
import { showMessage } from "react-native-flash-message";


export default function EditarContato({ route }) {

   const [getNome,setNome] = useState();
   const [getCpf,setCpf] = useState();
   const [getTelefone,setTelefone] = useState();
   const [getId,setId] = useState();
   const [getAlterar,setAlterar] = useState();


    /*useEffect(()=>{
      if(route.params){
            const { nome } =  route.params
            const { telefone } =  route.params
            const { cpf } =  route.params 
            const { id } =  route.params
            const { alterar } =  route.params
            
            
            console.log( teste )
            setNome(nome)
            setTelefone(telefone)
            setCpf(cpf)
            setId(id)
            setAlterar(alterar)

      }
    },[]) */ 
  
    
     function excluirDados(){
         axios.delete('http://professornilson.com/testeservico/clientes/'+getId
        )
        .then(function (response) {
            setNome('')
            setTelefone('')
            setCpf('')
            showMessage({
                message: "Registro excluído com sucesso!",
                type: "success",
              });
          console.log(response);
        })
        .catch(function (error) {
            showMessage({
                message: "Algum erro aconteceu!",
                type: "info",
              });
            console.log(error);
        });
    }

    async function alterarDados(){
        await axios.put('http://professornilson.com/testeservico/clientes/'+getId,{
         nome:getNome,
         cpf:getCpf,
         telefone:getTelefone,  
        }
        )
        .then(function (response) {
            showMessage({
                message: "Registro alterado com sucesso!",
                type: "success",
              });
          console.log(response);
        })
        .catch(function (error) {
            showMessage({
                message: "Algum erro aconteceu!",
                type: "info",
              });
            console.log(error);
        });
    }


    return (
       <View style={styles.profile}>
           
            <TextInput 
                style={styles.input}
                placeholder='Nome'
            />
            <TextInput 
                style={styles.input}
                placeholder='Email'
            />
             <TextInput 
                style={styles.input}
                placeholder='Telefone'
            />
            <View style={styles.botoes}>
            <Button 
                title= 'Atualizar'
                color= '#1e90ff'
                onPress={alterarDados}
             
            />
            </View>
            <View style={styles.botoes}>
            <Button 
                title= 'Excluir'
                color= 'red'
                onPress={excluirDados}
                
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