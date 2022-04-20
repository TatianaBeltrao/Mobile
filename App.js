import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from './components/header'
import Login from './components/login'


export default function App() {
  return (
    <View style={styles.container}>

      <Header />
        <View style={styles.login}>
          <Login/>

            <View style={styles.formLogin}>

          </View>
        </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#e6e6fa'
  },
  login:{
    flex:1 
  },
 formLogin:{
   flex:1
 }

});
