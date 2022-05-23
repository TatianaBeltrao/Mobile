import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header({title}){

    return(
        <View style={styles.header}> 
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    header: {
        width:'100%',
        height: '100%',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center'

    }

})

