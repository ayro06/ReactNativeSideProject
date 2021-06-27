import 'react-native-gesture-handler';
import React, { createContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactList from './screens/ContactList';
import ContactDetails from './screens/ContactDetails';
import ContactEdit from './screens/ContactEdit';
import ContactAdd from './screens/ContactAdd';
import ContactDelete from './screens/ContactDelete';

export const ContextTheme = createContext();

export default function App() {



  const MyStack = createStackNavigator(); //Creates a new instance of a Stack Navigator

  //'initialRouteName' defines which page/screen to load first
  return (
    <ContextTheme.Provider value={styles}> {/*applies the styles to all the pages below */}
      <NavigationContainer>
        <MyStack.Navigator initialRouteName="ConactList">
          <MyStack.Screen name="ContactList" component={ContactList} />
          <MyStack.Screen name="ContactDetails" component={ContactDetails} />
          <MyStack.Screen name="ContactEdit" component={ContactEdit} />
          <MyStack.Screen name="ContactAdd" component={ContactAdd} />
          <MyStack.Screen name="ContactDelete" component={ContactDelete} />
        </MyStack.Navigator>
      </NavigationContainer>
    </ContextTheme.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactTile: {
    flex: 1,
    flexDirection: 'row',
    padding: 2.5,
    backgroundColor: '#00A887',
    borderBottomWidth: 1,
    borderColor: '#05876E',
    marginVertical: 5,
    marginHorizontal: 2.5,
    minWidth: '100%'
  },
  contactTileText: {
    color: '#FFF'
  },
  contactButton: {
    backgroundColor: '#FFF',
    margin: '2.5px',
    padding: '2.5px',
    color: '#00A887',
    textAlign: 'center'
  },
  label: {
    color: '#00A887',
    fontWeight: 'bold'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#00A887',
    marginVertical: 5,
    padding: 5
  }
});