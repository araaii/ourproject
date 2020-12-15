import React, {useState} from 'react';
import {Input,Button } from 'react-native-elements';
import {View, Text, StyleSheet,SafeAreaView,Alert} from 'react-native';
import * as SQLite from 'expo-sqlite';
import Icon from 'react-native-vector-icons/MaterialIcons';


Icon.loadFont();




const db = SQLite.openDatabase("db.db");
const ChatScreen =() => {const [ data, setData] = React.useState([]);

  React.useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, task_id INTEGER, description TEXT, imguri TEXT)'
      )
    });
    handleFetchData();
  }, []);
  const [title, setTitle] = useState("");
   const [task_id, setTask_id] = useState("");
    const [description, setDescription] = useState("");
     const [imguri, setImguri] = useState("");
    const insertData = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO Posts (title, task_id, description,imguri) values (?, ?,?,?)', [title, task_id, description, imguri],
        (txObj, resultSet) => resultSet.rowsAffected > 0 && console.log("successfully inserted"&& console.log({data}))&& Alert.alert({}),
        (txObj, error) => console.log('Error', error))
    })
  }
  const handleFetchData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Posts', null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => { console.log(_array, 1111); setData(_array)},
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => {console.log('Error ', error)}
        ) 
    })
  }
  

  
  console.log({data})







  return(
    <SafeAreaView style={{flex:1,justifyContent:'center'}}>
    <Input label = {"Title"}
    onChangeText = {val => setTitle(val)}
    />   
    <Input label = {"Task_id"}
    onChangeText = {val => setTask_id(val)}
    />   
    <Input label = {"Description"}
    onChangeText = {val => setDescription(val)}
    />   
    <Input label = {"YourImageURL"}
    onChangeText = {val => setImguri(val)}
    />   
    <View >
      {data.map(item => <Text>{item.text}</Text>)}
      <Button title="Save" color="green" onPress={()=> insertData()}/>
    </View>
    
    </SafeAreaView>
  )
}

export default ChatScreen;