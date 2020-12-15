import * as SQLite from 'expo-sqlite';
import React, {useState} from 'react';
import { Text, View, StyleSheet,SafeAreaView,Button,TouchableOpacity,FlatList,TextInput, Alert, Image } from 'react-native';
import {Input } from 'react-native-elements';
import Name from '../components/Name';
const Data=[
  {id: '1',
  imguri: ''},
  {id: '2',
  imguri: ''}
]
const db = SQLite.openDatabase("db.db");
const UserScreen =({navigation}) => {const [ data, setData] = React.useState([]);
  const [infoid, setInfoid] = useState("");
 



  React.useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Avatar (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
      )
    });
    handleFetchData();
  }, []);
  const [name, setName] = useState("");

    const insertData = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO Avatar (name) values (?)', [name],
        (txObj, resultSet) => resultSet.rowsAffected > 0 && console.log("successfully inserted"&& console.log({data})),
        (txObj, error) => console.log('Error', error))
    })
  }
  const handleFetchData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Avatar', null, // passing sql query and parameters:null
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
    <Input label = {"Name"}
    onChangeText = {val => setName(val)}/>
     <View >
      {data.map(name => <Text>{name.text}</Text>)}
      <Button title="Save" color="green" onPress={()=> insertData()}/>
    </View>
    <Text>{name.text}</Text>
     <Image source={{uri: 'https://bit.ly/2KpTPX2'}} style={{width:"50%", height:"50%", alignItems: 'center'}}/>
    </SafeAreaView>    )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    margin: 8,
    backgroundColor: 'lightgreen'
  }
});
export default UserScreen;