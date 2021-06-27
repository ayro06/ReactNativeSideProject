import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ContextTheme } from '../App';
import { useNavigation } from '@react-navigation/native'

const ContactTile = (props) => {

    const navi = useNavigation();
    let contact = props.contact;
    const styles = useContext(ContextTheme);

    return (
        <View style={styles.contactTile}>
            <View style={{width:'70%'}}>
                <Text style={styles.contactTileText}> {contact.Name}</Text>
            </View>
            <View style={{width:'30%'}}>
                <Text style={styles.contactButton} onPress={() => navi.navigate("ContactDetails", contact)}>Details</Text>
                <Text style={styles.contactButton} onPress={() => { navi.navigate("ContactEdit", contact) }}>Edit</Text>
                <Text style={styles.contactButton} onPress={() => { navi.navigate("ContactDelete", contact) }}>Delete</Text>
                <Text>{" "}</Text>
            </View>
        </View>
    );
}

export default ContactTile;