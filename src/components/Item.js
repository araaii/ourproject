import * as React from 'react';
import {TouchableOpacity,Text,StyleSheet,Image,View} from 'react-native';

const Item = ({item, backgroundColor, handleOnPress}) => {
  return(
    <TouchableOpacity style={[styles.item, {backgroundColor}]} onPress={handleOnPress}>
    <Image source={{uri: item.url}} style={{width:75, height:75}}/>
     <Text style={styles.points}>{item.title}              Баллы: {item.points} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
  item:{
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "skyblue",
    flexDirection: 'row-reverse'
  },
  points:{
    fontSize:18,
    flex: 1 ,
    alignContent: 'center'
  }
});

export {Item} ; 