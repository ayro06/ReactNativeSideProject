import React, { useState, useContext } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContextTheme } from '../App';
import { addContactFromApiAsync } from '../services/contacts.service';

const ContactAdd = () => {

    const navi = useNavigation();
    const styles = useContext(ContextTheme);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');

    function save() {

        addContactFromApiAsync(name, phone, street, city, state, zip, country)
            .then(response => navi.navigate("ContactList", {}));
    }

    return (
        <View style={{padding:5}}>
            <Text>ADD CONTACT</Text>
            <Text>{"  "}</Text>
            <Text style={styles.label}>Name: <TextInput style={styles.textInput} value={name} onChangeText={setName} /></Text>
            <Text style={styles.label}>Phone: <TextInput style={styles.textInput} value={phone} onChangeText={setPhone} /></Text>
            <Text style={styles.label}>Street: <TextInput style={styles.textInput} value={street} onChangeText={setStreet} /></Text>
            <Text style={styles.label}>City: <TextInput style={styles.textInput} value={city} onChangeText={setCity} /></Text>
            <Text style={styles.label}>State: <TextInput style={styles.textInput} value={state} onChangeText={setState} /></Text>
            <Text style={styles.label}>Zip: <TextInput style={styles.textInput} value={zip} onChangeText={setZip} /></Text>
            <Text style={styles.label}>Country: <TextInput style={styles.textInput} value={country} onChangeText={setCountry} /></Text>

            <Button title="Save" onPress={save} />

        </View>
    );
}

export default ContactAdd;