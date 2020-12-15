import React from 'react';
import {View, Text, StyleSheet,Image, HyperLink,TouchableOpacity,ScrollView} from 'react-native';

import Hyperlink from 'react-native-hyperlink';

const PrizeScreen =() => {
  return(
    <View><ScrollView>
    <Image source={require('../img/box.png')} style={styles.ecobox}/>
            <Hyperlink linkDefault={true}
              linkStyle={{ color: 'seagreen', fontSize: 24 }}
              onPress={(url, text) => alert(url + ', ' + text)}
              linkText={(url) =>
                url === 'https://www.instagram.com/ecoyou.store/' ? '@ecoyou.store' : url
              }>
              <Text style={{fontSize:24}}>
                Бокс от https://www.instagram.com/ecoyou.store/ 
              </Text>
            </Hyperlink>
      <Text style={styles.ecoboxtxt}>Магазин эко товаров в Алмате</Text>
      <Text style={styles.ecoboxtxt}>Также у них есть</Text>
      
      <Image source={require('../img/bottle.png')} style={styles.ecobox}/>
      <Image source={require('../img/brush.png')} style={styles.ecobox}/>
      <Image source={require('../img/bag.png')} style={styles.ecobox}/>
      <Image source={require('../img/others.png')} style={styles.ecobox}/>
      <Hyperlink linkDefault={true}
              linkStyle={{ color: 'seagreen', fontSize: 20 }}
              onPress={(url, text) => alert(url + ', ' + text)}
              linkText={(url) =>
                url === 'https://www.instagram.com/ecoyou.store/' ? 'здесь' : url
              }>
              <Text style={styles.ecoboxtxt}>
                Узнать больше Вы можете https://www.instagram.com/ecoyou.store/ .
              </Text>
            </Hyperlink>
            <Hyperlink linkDefault={true}
              linkStyle={{ color: 'seagreen', fontSize: 20 }}
              onPress={(url, text) => alert(url + ', ' + text)}
              linkText={(url) =>
                url === 'https://taplink.cc/ecoyou.store' ? 'здесь' : url
              }>
              <Text style={styles.ecoboxtxt}>
                Заказать https://taplink.cc/ecoyou.store .
              </Text>
            </Hyperlink></ScrollView>
    </View>
  )
}

export default PrizeScreen;


const styles = StyleSheet.create({
 ecobox:{
   width:'100%' ,
   height:275
 },
 ecoboxtxt:{
   fontSize:20,
  
 }
});
