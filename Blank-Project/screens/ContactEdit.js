import React, { useState, useContext } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ContextTheme } from '../App';
import { updateContactFromApiAsync } from '../services/contacts.service';

const ContactEdit = () => {

    const navi = useNavigation();
    const route = useRoute();
    let contact = route.params;
    const styles = useContext(ContextTheme);

    const [name, setName] = useState(contact.Name);
    const [phone, setPhone] = useState(contact.Phone);
    const [street, setStreet] = useState(contact.Address.Street);
    const [city, setCity] = useState(contact.Address.City);
    const [state, setState] = useState(contact.Address.State);
    const [zip, setZip] = useState(contact.Address.Zip);
    const [country, setCountry] = useState(contact.Address.Country);

    function save() {

        updateContactFromApiAsync(contact.Id, name, phone, street, city, state, zip, country)
            .then(response => navi.navigate("ContactList", {}));
    }

    return (
        <View style={{padding:5}}>
            <Text>CONTACT EDIT</Text>
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

export default ContactEdit;