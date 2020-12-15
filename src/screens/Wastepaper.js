import React from 'react';
import {View, Text,Image} from 'react-native';
import {Item} from '../components';
const Wastepaper =() => {
  return(
    <View>
    <Image source={{uri: 'https://bit.ly/2JW2QXU'}} style={{width:'100%', height:200}}/>
      <Text>Соберите всю макулатуру В Вашем доме и сдайте ее в один из пунктов приема. И не забывайте, что Вырубка лесов стоит за каждым: листом бумаги, газетой, картонной коробкой. Поделитесь здесь сколько макулатуры Вы собрали.</Text>
      <Text></Text>
    </View>
  )
}

export default Wastepaper;