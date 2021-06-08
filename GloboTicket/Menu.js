import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Menu = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.menu}>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Tickets')}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Events</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row'
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5
    },
    buttonText: {
        fontFamily: 'Ubuntu-Regular'
    }
})

export default Menu;