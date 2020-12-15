import React from 'react';
import {View, Text,Image} from 'react-native';
import {Item} from '../components';
const Lunchbox =() => {
  return(
    <View>
    <Image source={{uri: 'https://bit.ly/3oC32dA'}} style={{width:'100%', height:200}}/>
      <Text>Рассчитайте продукты для Вашего обеда без остатков. Постарайтесь сделать его максимально полезным и поделитесь своим ланчбоксом здесь!</Text>
      <Text></Text>
    </View>
  )
}

export default Lunchbox;