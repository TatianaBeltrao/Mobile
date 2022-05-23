import react, {useState, useEffect} from 'react';
import { StyleSheet,  View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Navigator from '../rotas/homeStack';
import axios from 'axios';


export default function Lista({ navigation }) {
const [getData, setData] = useState([]);

    useEffect(()=>{
        
        async function resgatarDados(){
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
              );
              setData(result.data);
        }
        resgatarDados();
    })
const pressEdit = () => {
  navigation.navigate('EditContato');
}


return (

<View style={styles.lista}> 
    
    <FlatList 
        data={getData}
        renderItem={ ({item}) => (
          <TouchableOpacity onPress={pressEdit}>
            <View style={styles.touch}>
              <Image style={styles.imagem} source={require('../assets/user.png')}/>
              <Text style={styles.item }>{item.nome}</Text>
              <Text style={styles.item }>{item.telefone}</Text> 
              </View> 
          </TouchableOpacity>
            
        )}
    />
</View>
);
}

const styles = StyleSheet.create({
  lista:{
    flex:1,
    backgroundColor: '#fff',
    
},
  item:{
    marginTop:24,
    marginBottom:24,
    alignContent: 'center',
    marginLeft:20,
        
  },
  touch: {
    flexDirection: "row",
    alignContent: 'center',
    backgroundColor:'#b0c4de'
  },
  imagem: {
    width: 20, 
    height: 20, 
    marginLeft: 20,
    marginTop:20
  }
});