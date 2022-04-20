import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function Header() {
    return (
       <View style={styles.header}>
           <Feather style={{ marginLeft: 15 }} name='menu' size={32}/>
           
       </View> 
    )
}

const styles = StyleSheet.create({
header:{
    flexDirection: 'row',
    height: 80,
    paddingTop: 25,
    backgroundColor: '#b0c4de',
 
},

    
})