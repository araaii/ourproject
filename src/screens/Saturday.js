import React from 'react';
import {View, Text,Image} from 'react-native';
import {Item} from '../components';
const Saturday =() => {
  return(
    <View>
    <Image source={{uri: 'https://bit.ly/3ncntxo'}} style={{width:'100%', height:200}}/>
      <Text>Выйдите на улицу и постарайтесь как можно больше очистить Ваш район. Наши рекомендации: 1) Не собирайте опавшие листья, Ваша задача - сбор мусора. 2)Найдите заготовителя вторсырья. 3) Возьмите с собой мусорные пакеты различных цветов, чтобы собирать пригодный и непригодный для переработки мусор раздельно. 4) Поделитесь своими результатами здесь!</Text>
      <Text></Text>
    </View>
  )
}

export default Saturday;