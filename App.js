import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';
import AnimalApp from './Animal';
import Icon from "react-native-vector-icons/FontAwesome6";

//To run this use change in package.json main to this "main": "expo/AppEntry.js",

/*Exercise 1*/
/*export default function App() {
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUser] = useState('');
  return (
    <View style={styles.container}>
        <Text>User Type:</Text>
        <RNPickerSelect
            onValueChange={(value) => setRole(value)} //tells the value of the chosen option
            items={[
                { label: 'Admin', value: 'Admin' },
                { label: 'Guest', value: 'Guest' },
            ]}
        />
        <Text>Username:</Text>
        <TextInput style={{borderWidth: 1,height: 40,margin: 10, padding:10, width:400}} onChangeText={(text) =>  setUser(text)} />
      <Text>Password:</Text>
      <TextInput style={{borderWidth: 1,height: 40,margin: 10, padding:10, width:400}} onChangeText={(text) =>  setPassword(text)}/>

        {/!*Exercise 1D*!/}
        {/!*<Button
            title="Log In"
            color="#2296f3"
            //console.log
            //onPress={() => { console.log('Button is pressed'); }}
            onPress={() => {Alert.alert('Welcome!'); }}

        />*!/}

        {/!*Exercise 1E*!/}
        {/!*<TouchableOpacity onPress={() => {Alert.alert('Welcome!'); }}>
            <Text>Log In</Text>
        </TouchableOpacity>*!/}

        <TouchableOpacity onPress={() => {
            let message = 'Welcome ' + role + ' ' +username;
            ToastAndroid.show(message, ToastAndroid.SHORT)
        }}>
            <Text>Log In</Text>
        </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}*/

export default function App() {
    return <AnimalApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
