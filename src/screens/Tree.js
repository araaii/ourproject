import React from 'react';
import {View, Text, Image} from 'react-native';
import {Item} from '../components';
const Tree =() => {
  return(
    <View>
    <Image source={{uri: 'https://bit.ly/37eRRS9'}} style={{width:'100%', height:200}}/>
      <Text>Вам необходимо посадить дерево своими руками. А вот наши рекомаендации по посадке дерева:
       1) Подробнее изучите все нюансы садки деревьев прежде чем начать.  
       2)Позовите своих родственников и друзей- ведь вместе намного веселее и продуктивнее! 
       3) Совместите это событие с пикником на свежем воздухе(но не используйте одноразовую посуду! 
       4) Расскажите о своем опыте здесь, поделитесь фотографиями и общим ощущением, чтобы все больше и больше людей стремились акже посадить деревья. 
       5) Получайте удовольствие от процесса!</Text>
      <Text></Text>
    </View>
  )
}

export default Tree;