import React, {useState} from 'react';
import { Text, View, StyleSheet,SafeAreaView,Button,TouchableOpacity,FlatList,TextInput, Alert, Image } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Item} from '../components';
import * as SQLite from 'expo-sqlite';
const DATA = [
  {
    id:'101',
    title:'Посадить дерево',
    points:'1500',
    url: 'https://bit.ly/37eRRS9',
    description: 'Вам необходимо посадить дерево своими руками. А вот наши рекомаендации по посадкее дерева: 1) Подробнее изучите все нюансы прежде чем начать. Можете пройти по этой ссылке https://ru.wikihow.com/посадить-дерево . 2)Позовите своих родственников и друзей- ведь вместе намного веселее и продуктивнее! 3) Совместите это событие с пикником на свежем воздухе(но не используйте одноразовую посуду! 4) Расскажите о своем опыте здесь, поделитесь фотографиями и общим ощущением, чтобы все больше и больше людей стремились акже посадить деревья. 5) Получайте удовольствие от процесса!',
    screen: "Tree"
  },
  {
    id:'201',
    title:'Выйти на субботник',
    points:'850',
    url: 'https://bit.ly/3ncntxo' ,
    description: 'Выйдите на улицу и постарайтесь как можно больше очистить Ваш район. Наши рекомендации: 1) Не собирайте опавшие листья, Ваша задача - сбор мусора. 2)Найдите заготовителя вторсырья. 3) Возьмите с собой мусорные пакеты различных цветов, чтобы собирать пригодный и непригодный для переработки мусор раздельно. 4) Поделитесь своими результатами здесь!',
    screen: "Saturday"
  },
  {
  id: '301',
  title:'Собрать макулатуру',
  points:'450',
  url: 'https://bit.ly/2JW2QXU',
  description: 'Соберите всю макулатуру В Вашем доме и сдайте ее в один из пунктов приема. И не забывайте, что Вырубка лесов стоит за каждым: листом бумаги, газетой, картонной коробкой. Поделитесь здесь сколько макулатуры Вы собрали.',
  screen: "Wastepaper"
  },
  {
    id:'401',
    title:'Сортировать мусор',
    points:'200',
    url:'https://bit.ly/3n6zpAJ',
    description: 'Организуйте дома свою эффективную систему сортировки мусора и поделитесь ею с остальными!',
    screen: "Sorting"
  },
  {
    id:'501',
    title:'Полезный ланчбокс',
    points:'50',
    url: 'https://bit.ly/3oC32dA',
    description: 'Рассчитайте продукты для Вашего обеда без остатков. Постарайтесь сделать его максимально полезным и поделитесь своим ланчбоксом здесь!',
    screen: "Lunchbox"
  }
]

//const db = SQLite.openDatabase("db.db");
const TaskScreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
/*const [ data, setData] = React.useState([]);
  React.useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, points INT, description TEXT, imguri TEXT)'
      )
    });
    handleFetchData();
  }, []);
    const insertData = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO items (title, points, description,imguri) values (?, ?,?,?),(?,?,?,?),(?,?,?,?),(?,?,?,?),(?,?,?,?)', ['Посадить дерево',1500,'Вам необходимо посадить дерево своими руками. А вот наши рекомаендации по посадкее дерева: 1) Подробнее изучите все нюансы прежде чем начать. Можете пройти по этой ссылке https://ru.wikihow.com/посадить-дерево . 2)Позовите своих родственников и друзей- ведь вместе намного веселее и продуктивнее! 3) Совместите это событие с пикником на свежем воздухе(но не используйте одноразовую посуду! 4) Расскажите о своем опыте здесь, поделитесь фотографиями и общим ощущением, чтобы все больше и больше людей стремились акже посадить деревья. 5) Получайте удовольствие от процесса!)','https://bit.ly/347e5DM','Выйти на субботник',850,'Выйдите на улицу и постарайтесь как можно больше очистить Ваш район. Наши рекомендации: 1) Не собирайте опавшие листья, Ваша задача - сбор мусора. 2)Найдите заготовителя вторсырья. 3) Возьмите с собой мусорные пакеты различных цветов, чтобы собирать пригодный и непригодный для переработки мусор раздельно. 4) Поделитесь своими результатами здесь! ', 'https://bit.ly/3r2u2oG', 'Собрать макулатуру', 550,'Соберите всю макулатуру В Вашем доме и сдайте ее в один из пунктов приема. И не забывайте, что Вырубка лесов стоит за каждым: листом бумаги, газетой, картонной коробкой. Поделитесь здесь сколько макулатуры Вы собрали.','https://bit.ly/2JW2QXU', 'Сортировать мусор', 200, 'Организуйте дома свою эффективную систему сортировки мусора и поделитесь ею с остальными!', 'https://bit.ly/3n6zpAJ','Полезный ланчбокс', 50, 'Рассчитайте продукты для Вашего обеда без остатков. Постарайтесь сделать его максимально полезным и поделитесь своим ланчбоксом здесь! ', 'https://bit.ly/3oC32dA'],
        (txObj, resultSet) => resultSet.rowsAffected > 0 && console.log("successfully inserted"),
        (txObj, error) => console.log('Error', error))
    })
  }
  const handleFetchData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM items', null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => { console.log(_array, 1111); setData(_array)},
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => {console.log('Error ', error)}
        ) 
    })
  }
  console.log({data})
  console.log({data})
 
  const handleOpenDetails=(id)=>{
   const selectedItem = data.filter(item=>item.id===id);
   console.log({selectedItem})
    navigation.navigate("Details",{details: selectedItem[0].item, id: selectedItem[0].item})
  }*/
  const renderItem = ({item})=> {
    let backgroundColor='';
    if(item.id===selectedId){
     backgroundColor='darkgreen'
    }
    else{
      backgroundColor='lightgreen' 
    }
    
    //const backgroundColor= item.id === SelectedId ? 'gray' : 'skyblue';
    return(
      <Item item={item} backgroundColor={backgroundColor} 
     handleOnPress = {()=>navigation.navigate(item.screen)}
     // handleOnPress = {()=>setSelectedId(item.id)}
      />
    )
    }

    return (
      <SafeAreaView style={styles.container}>
        <View backgroundColor="darkseagreen"/>
        <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor ={item=>item.id}
        extraData={selectedId}
        />
        </SafeAreaView>
    );
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default TaskScreen;