import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Lista from "../screens/lista";
import CadastroContato from "../screens/cadastroContato";
import CadastroUsuario from "../screens/cadastroUsuario";
import EditarContato from "../screens/editarContato";
import Header from "../componentes/header";


const telas = {
    Home: {
        screen: Home,
        navigationOptions:{
            headerTitle: () => <Header title=''/>
        }
    },
    Lista: {
        screen: Lista,
        navigationOptions:{
            headerTitle: () => <Header title='Lista de Contatos'/>
        }
    },
    CadastroUsuario: {
        screen: CadastroUsuario,
        navigationOptions:{
            headerTitle: () => <Header title='Cadastro Usuário'/>
        }
    },
    AddContato: {
        screen: CadastroContato,
        navigationOptions:{
            headerTitle: () => <Header title='Cadastro Contato'/>
        }
    },
    EditContato: {
        screen: EditarContato,
        navigationOptions:{
            headerTitle: () => <Header title='Editar Contato'/>
        }
    }

}

const HomeStack = createStackNavigator(telas);

export default createAppContainer(HomeStack);
