import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';

import MyButton from '../components/buttons/MyButton';

export default class Details extends React.Component {
  render() {
    const {item} = this.props.route.params;
    return (    
      
      <View style={styles.Detalhes}>
      
        <View>          
          <Text style={styles.Nome}>{`${item.Nome}`}</Text>        
        </View>
        
        <TouchableOpacity style={styles.ImagemContainer} onPress={() => this.goToDetail(item)}>          
            <Image style={{flex:1, height: undefined, width: undefined}} source={item.Imagem}/>          
        </TouchableOpacity>

        <ScrollView style={styles.Descrição} scrollEnable={true}> 
        <View style={styles.Descrição}>
          <Text>{`${item.Descrição}`}</Text>        
        </View> 
        
        <View style={styles.Avaliação}>
          <Text>{`${item.Avaliação}` + '/10 de ' + `${item.Qtd_avaliações}` + ' avaliações'}</Text>        
          <Text>{`${item.Cidade} - ${item.Estado}`}</Text>        
        </View>
        
        <View style={styles.botaoAlugar}>
          <MyButton title="Alugar" screen="Login" navigation={this.props.navigation} />
        </View>
        </ScrollView>
      </View>      
    );    
  }
}


const styles = StyleSheet.create({
  Detalhes: {
    paddingTop: 15,
    flex: 1,
  },
  Nome: {
    color: 'black',  
    fontSize: 25,  
    paddingTop: 5,
    alignSelf: 'center',        
  },
  Seta: {
    alignItems: 'flex-start',
    height: 38,
  },
  ImagemContainer: {
    width: '100%',
    height: '60%',         
  },
  Descrição: {
    padding: 10,
    paddingTop: 10,
  },
  Avaliação: {    
    width: '50%',
    paddingTop: 50,
    paddingLeft: 15,
    alignItems: 'flex-start',
    color: 'red',
  },
  botaoAlugar: {
    width: '50%',
    alignSelf: 'flex-end',
    
  }
});