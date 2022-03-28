import * as React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import MyButton from '../components/buttons/MyButton';

const DATA = [
  {
    id: 1,
    Nome: 'Royal Tulip Alvorada',
    Estrelas: '4',
    Cidade: 'Brasília',
    Estado: 'Distrito Federal',
    Faixa_preco: 'R$500,00',
    Avaliação: '9.5',
    Imagem: require('../assets/images/royal_tulip.jpg'),
    Descrição: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    Qtd_avaliações: '500'
  },
  {
    id: 2,
    Nome: 'Copacabana Palace',
    Estrelas: '5',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Faixa_preco: 'R$2000,00',
    Avaliação: '9.8',
    Imagem: require('../assets/images/copacabana_palace.jpg'),
    Descrição: 'Descrição Copacabana Palace',
    Qtd_avaliações: '250'
  },
  {
    id: 3,
    Nome: 'Renaissance São Paulo Hotel',
    Estrelas: '5',
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Faixa_preco: 'R$950,00',
    Avaliação: '9.7',
    Imagem: require('../assets/images/renaissance_sp.jpg'),
    Descrição: 'Descrição Renaissance',
    Qtd_avaliações: '100'
  },
  {
    id: 4,
    Nome: 'NANNAI Resort & Spa',
    Estrelas: '5',
    Cidade: 'Ipojuca',
    Estado: 'Pernambuco',
    Faixa_preco: 'R$960,00',
    Avaliação: '9.5',
    Imagem: require('../assets/images/nannai_beach_resort.jpg'),
    Descrição: 'Descrição Nannai',
    Qtd_avaliações: '350'
  },
  {
    id: 5,
    Nome: 'Tauá Resort & Convention Alexânia',
    Estrelas: '4',
    Cidade: 'Alexânia',
    Estado: 'Goiás',
    Faixa_preco: 'R$1500,00',
    Avaliação: '9.4',
    Imagem: require('../assets/images/renaissance_sp.jpg'),
    Descrição: 'Descrição Tauá Resort',
    Qtd_avaliações: '200'
  },
  {
    id: 6,
    Nome: 'Modevie Boutique Hotel',
    Estrelas: '5',
    Cidade: 'Gramado',
    Estado: 'Rio Grande do Sul',
    Faixa_preco: 'R$750,00',
    Avaliação: '9.6',
    Imagem: require('../assets/images/modevie_hotel.jpg'),
    Descrição: 'Descrição Modevie',
    Qtd_avaliações: '50'
  },
  {
    id: 7,
    Nome: 'Grand Palladium Imbassaí Resort & Spa',
    Estrelas: '4',
    Cidade: 'Mata de São João',
    Estado: 'Bahia',
    Faixa_preco: 'R$1500,00',
    Avaliação: '9.7',
    Imagem: require('../assets/images/grand_palladium.jpg'),
    Descrição: 'Descrição Grand Palladium',
    Qtd_avaliações: '10'
  },
  {
    id: 8,
    Nome: 'Hotel Minas Gerais',
    Estrelas: '3',
    Cidade: 'Poços de Caldas',
    Estado: 'Minas Gerais',
    Faixa_preco: 'R$250,00',
    Avaliação: '9.3',
    Imagem: require('../assets/images/hotel_minas_gerais.jpg'),
    Descrição: 'Descrição Hotel Minas Gerais',
    Qtd_avaliações: '2000'
  },
  {
    id: 9,
    Nome: 'Seara Praia Hotel',
    Estrelas: '4',
    Cidade: 'Meireles',
    Estado: 'Ceará',
    Faixa_preco: 'R$350,00',
    Avaliação: '9.2',
    Imagem: require('../assets/images/seara_praia_hotel.jpg'),
    Descrição: 'Descrição Seara Praia Hotel',
    Qtd_avaliações: '4710'
  },
  {
    id: 10,
    Nome: 'Hotel ibis',
    Estrelas: '3',
    Cidade: 'Florianópolis',
    Estado: 'Santa Catarina',
    Faixa_preco: 'R$180,00',
    Avaliação: '8.7',
    Imagem: require('../assets/images/hotel_ibis.jpg'),
    Descrição: 'Descrição Hotel Ibis',
    Qtd_avaliações: '2150'
  },
  {
    id: 11,
    Nome: 'Hotel Santorini',
    Estrelas: '3',
    Cidade: 'Vila Velha',
    Estado: 'Espírito Santo',
    Faixa_preco: 'R$150,00',
    Avaliação: '8.5',
    Imagem: require('../assets/images/hotel_santorini.jpg'),
    Descrição: 'Descrição Hotel Santorini',
    Qtd_avaliações: '7500'
  },
  {
    id: 12,
    Nome: 'Mato Grosso Palace Hotel',
    Estrelas: '3',
    Cidade: 'Cuiabá',
    Estado: 'Mato Grosso',
    Faixa_preco: 'R$120,00',
    Avaliação: '8.0',
    Imagem: require('../assets/images/mato_grosso_palace.jpg'),
    Descrição: 'Descrição Mato Grosso Palace Hotel',
    Qtd_avaliações: '8500'
  },
  {
    id: 13,
    Nome: 'Vidam Hotel Aracaju',
    Estrelas: '4',
    Cidade: 'Aracaju',
    Estado: 'Sergipe',
    Faixa_preco: 'R$700,00',
    Avaliação: '8.5',
    Imagem: require('../assets/images/vidam_hotel_aracaju.jpg'),
    Descrição: 'Descrição Vidam Hotel Aracaju',
    Qtd_avaliações: '957'
  },
  {
    id: 14,
    Nome: 'BobZ Boutique Resort',
    Estrelas: '4',
    Cidade: 'Cajueiro da Praia',
    Estado: 'Piauí',
    Faixa_preco: 'R$1000,00',
    Avaliação: '9.2',
    Imagem: require('../assets/images/bobz_boutique.jpg'),
    Descrição: 'Descrição Bobz Boutique',
    Qtd_avaliações: '15'
  },
  {
    id: 15,
    Nome: 'Iberostar Grand Amazon',
    Estrelas: '5',
    Cidade: 'Manaus',
    Estado: 'Amazonas',
    Faixa_preco: 'R$1500,00',
    Avaliação: '9.7',
    Imagem: require('../assets/images/iberostar_grand_amazon.jpg'),
    Descrição: 'Descrição Iberostar',
    Qtd_avaliações: '42'
  },
  
];
export default class Home extends React.Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={() => this.goToDetail(item)}>        
        <Text style={styles.listItemContentNome}>{`${item.Nome}`}</Text>
        <Text style={styles.listItemContentPreco}>{`${item.Faixa_preco}`}</Text> 
        <Text style={styles.listItemContentEstrelas}>{`${item.Estrelas}` + ' estrelas'}</Text> 
        </TouchableOpacity>        
      </View>
    );
  };

  goToDetail = (item) =>{
    this.props.navigation.navigate('Details', {screen: 'Details', item: item})
  }

  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/images/hotel_background.jpg')}>
        <View style={styles.mainView}>
          <FlatList data={DATA} renderItem={(item) => this.renderItem(item)} />
          <MyButton title="Sair" screen="Login" navigation={this.props.navigation} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,    
    paddingBottom: 15,
    paddingTop: 15,    
  },
  imageBackground: {
    height: '100%',
  },
  listItem: {
    height: 100,
    width: 320,
    backgroundColor: 'purple',
    margin: 7,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 12,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    borderRightColor: 'white',
    borderRightWidth: 3,
  },
  listItemContentNome: {
    fontSize: 24,
    color: 'orange',
    fontWeight: '900',
    height: '55%',
    width: '100%',
    margin: 2,
    paddingRight: 10,
    paddingLeft: 1,
  },
  listItemContentPreco: {
    fontSize: 15,
    color: 'white',
    fontWeight: '800',        
    maxWidth: '75%',
    alignItems: 'flex-start'
  },
  listItemContentEstrelas: {
    fontSize: 15,
    fontFamily: 'Cochin',
    color: 'yellow',
    fontWeight: '700',   
    alignSelf: 'flex-end',
    maxWidth: '75%',
    minWidth: '25%',
    minHeight: '25%',
  },
});