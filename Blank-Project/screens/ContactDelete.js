import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ContextTheme } from '../App';
import { deleteContactFromApiAsync } from '../services/contacts.service';

const ContactDelete = () => {

    const navi = useNavigation();
    const route = useRoute();
    let contact = route.params;
    const styles = useContext(ContextTheme);

    function remove() {

        deleteContactFromApiAsync(contact.Id)
            .then(response => navi.navigate("ContactList", {}));
    }

    return (
        <View style={{padding:5}}>
            <Text>CONTACT DETAILS</Text>
            <Text>{"  "}</Text>
            <Text>Name: {contact.Name}</Text>
            <Text>Phone: {contact.Phone}</Text>
            <Text>Street: {contact.Address.Street}</Text>
            <Text>City: {contact.Address.City}</Text>
            <Text>State: {contact.Address.State}</Text>
            <Text>Zip: {contact.Address.Zip}</Text>
            <Text>Country: {contact.Address.Country}</Text>
        

            <Button title="Delete" onPress={remove} />

        </View>
    );
}

export default ContactDelete;