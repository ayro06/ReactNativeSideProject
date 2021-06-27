import React, { useEffect, useState, useContext } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { ContextTheme } from '../App';
import { getContactsFromApiAsync } from '../services/contacts.service'
import ContactTile from './ContactTile';


const ContactList = () => {

    const [people, setPeople] = useState([]);
    const route = useRoute();
    const navi = useNavigation();
    const styles = useContext(ContextTheme);

    //UseEffect is func. that takes 2 arguments => 1st arg is a func., 2nd arg is an array
    //2nd arg i.e.array => put variables in there that is observed & if changed, it will trigger the func (1st arg) as a consequence of changing
    //Syntax => useEffect(() => {}, []);
    useEffect(() => {
        getContactsFromApiAsync()
            .then(json => setPeople(json)); //extracts the JSON from the GetPeople webpage & assigns it to setPeople[]
    }, [route.params]);

    return (
        <View style={styles.container}>
            <Text>MY CONTACTS</Text>
            <Button title='Add Contact' onPress={() => { navi.navigate("ContactAdd") }} />
            <Text>{" "}</Text>
            <ScrollView style={{ maxHeight: '610px', padding: 5, minWidth: '100%' }}>
                {people.map(p => <ContactTile key={p.Id} contact={p} />)}
            </ScrollView>
        </View>
    );
}

export default ContactList;