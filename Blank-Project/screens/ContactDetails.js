import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ContactDetails = () => {

    const route = useRoute();
    let contact = route.params;


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
        </View>
    );
}

export default ContactDetails;