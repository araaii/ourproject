import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskScreen from './src/screens/TaskScreen';
import ChatScreen from './src/screens/ChatScreen';
import UserScreen from './src/screens/UserScreen';
import PrizeScreen from './src/screens/PrizeScreen';
import Details from './src/screens/Details';
import Tree from './src/screens/Tree';
import Sorting from './src/screens/Sorting';
import Saturday from './src/screens/Saturday';
import Wastepaper from './src/screens/Wastepaper';
import Lunchbox from './src/screens/Lunchbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
Icon.loadFont();
Icon2.loadFont();
import * as SQLite from 'expo-sqlite';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const LogoItemTask = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoTitle}>Задания</Text>
      <Icon name="list" size={25} color="darkgreen" />
    </View>
  );
};

const LogoItemPrize = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoTitle}>Приз этой недели</Text>
      <Icon2 name="gift-outline" size={25} color="darkgreen" />
    </View>
  );
};
const LogoItemUser = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoTitle}>Пользователь</Text>
      <Icon name="account-box" size={25} color="darkgreen" />
    </View>
  );
};
const LogoItemChat = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoTitle}>Сдать</Text>
      <Icon name="chat" size={25} color="darkgreen" />
    </View>
  );
};

//const db = SQLite.openDatabase("db.db");

const App = () => {ss
  const Stack = createStackNavigator();
  const TaskStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tasks"
          component={TaskScreen}
          options={{
            headerTitle: (props) => <LogoItemTask {...props} />,
          }}
        />
        <Stack.Screen name="Sorting" component={Sorting} />
        <Stack.Screen name="Wastepaper" component={Wastepaper} />
        <Stack.Screen name="Lunchbox" component={Lunchbox} />
        <Stack.Screen name="Saturday" component={Saturday} />
        <Stack.Screen name="Tree" component={Tree} />
      </Stack.Navigator>
    );
  };
  const PrizeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Призы"
          component={PrizeScreen}
          options={{
            headerTitle: (props) => <LogoItemPrize {...props} />,
          }}
        />
      </Stack.Navigator>
    );
  };
  const ChatStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Cдать"
          component={ChatScreen}
          options={{
            headerTitle: (props) => <LogoItemChat {...props} />,
          }}
        />
      </Stack.Navigator>
    );
  };
  const UserStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Пользователь"
          component={UserScreen}
          options={{
            headerTitle: (props) => <LogoItemUser {...props} />,
          }}
        />
      </Stack.Navigator>
    );
  };


  
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'seagreen',
          inactiveTintColor: 'darkseagreen',
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Задания') {
              iconName = 'list';
            } else if (route.name === 'Сдать') {
              iconName = 'chat';
            } else if (route.name === 'Пользователь') {
              iconName = 'account-box';
            } else if (route.name === 'Призы') {
              iconName = 'card-giftcard';
            }
            return <Icon name={iconName} color={color} size={size} />;
          },
        })}>
        <Tab.Screen name={'Задания'} component={TaskStack} />
        <Tab.Screen name={'Призы'} component={PrizeStack} />
        <Tab.Screen name={'Сдать'} component={ChatStack} />
        <Tab.Screen name={'Пользователь'} component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
};

  /*  
const db = SQLite.openDatabase({name: 'sqlite.db', createFromLocation: '~sqlite.db'}, ()=>handleSuccess(), (error)=> handleError(error));

const handleSuccess = () =>{
 console.log("SUCCESS");
db.transaction(tx=>{
    tx.executeSql('SELECT*FROM Tasks', [], (tx, results)=>{
      console.log(results.rows.item(0));
      let tasks = [];
      for(let i=0; i<results.rows.length; i++){
        tasks.push(results.rows.item[i]);
      }
      console.log ({posts});
      setData(posts);
    })
  })
}
const handleError=(error)=>{
console.log({error});
}*/

/*const db = SQLite.openDatabase("db.db");
const App = () => {
  const [ data, setData] = React.useState([]);
  React.useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)'
      )
    });
    handleFetchData();
  }, []);
  const insertData = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO items (text, count) values (?, ?)', ['first item', 1],
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
  return (
    <View style={styles.container}>
      {data.map(item => <Text>{item.text}</Text>)}
      <Button title="Insert new data" onPress={()=> insertData()}/>
    </View>
  );
}*/

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkgreen',
  },
});

export default App;
