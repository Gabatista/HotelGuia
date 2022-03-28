import * as React from 'react'
import {StyleSheet, TextInput, ImageBackground, Text, View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyButton from '../components/buttons/MyButton';



export default class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        background: require('../assets/images/hotel_logo.jpg'),
        title: 'Guia de Hóteis'
      };
    }

    onChangeText = (text) => {
        this.state = {
          email: "",
          password: "",
          
        }
      }

 render() {
        const {email} = this.state;
        return(
            <View style={styles.mainView}>
                <ImageBackground style={styles.imageBackground} source={this.state.background} opacity={0.6}>
                    <View style={styles.titleView}>                        
                    <Text style={styles.titleText}>{`${this.state.title}`}</Text>
                    </View>                                        
                <View style={styles.TextInputView}>
                <TextInput
                    style={styles.emailField} 
                    value={this.state.email}
                    onChangeText={email => this.setState({email})} 
                    keyboardType="email-address" 
                    placeholder={'EMAIL'} />
                <TextInput
                    value={this.state.password}
                    style={styles.passwordField }
                    secureTextEntry
                    onChangeText={password => this.setState({password})}
                    placeholder={'SENHA'}>
                </TextInput>                
                <MyButton
                  title="Login"
                  screen="Home"
                  navigation={this.props.navigation}/>
                
                  <TouchableOpacity >
                  <Text style={styles.textoCadastro}>
                  Sem Cadastro? Cadastre-se
                  </Text>
                  </TouchableOpacity>
                
                
                </View>                                
                </ImageBackground>
            </View>  
            
        );
}
  goCadastro = () =>{
    this.props.navigation.navigate("Cadastro", {screen: "Cadastro"})
}
}
const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      padding: 32,
    },
    headerView: {
      flex: 1
    },
    fieldsView: {
      flex: 1
    },
    emailField: {
      borderColor: "#777777",
      borderWidth: 3,
      borderRadius: 16,
      marginVertical: 8,
      backgroundColor: 'rgba(255,255,255,1)'
    },
    passwordField: {
      borderColor: "#777777",
      borderWidth: 3,
      borderRadius: 16,
      marginVertical: 8,
      backgroundColor: 'rgba(255,255,255,1)'
    },
    imageBackground: {        
        height: '100%',
        width: '100%',                 
        resizeMode: 'contain',                   
    },
    titleText: {
        fontSize: 36,
        color: 'gold',
        fontWeight: 'bold',
        backgroundColor: 'rgba(52,52,52,0.8)',
    },
    titleView: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderColor: '#777777',
        borderWidth: 3,
        borderRadius: 16,
        marginVertical: 8,
        backgroundColor: 'rgba(255,255,255,0.4)',
    },
    textoCadastro: {
      alignSelf: 'center',
      paddingTop: 20,
    }
  });