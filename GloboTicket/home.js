import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Menu from './Menu';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.globologo}
            source={require('./images/ticket.png')}
            />
            <Text style={styles.title}>Welcome To GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <Image style={styles.heroimage} source={require('./images/hero.jpg')} />
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
            <View style={styles.menu}>
                <Menu />
            </View>

        </View>
    );
}

const introText = `Are you ready for the best events? Whether you are into sports, music, or the most amazing seminars we have got you covered.
Get ready to purchase great tickets at the best prices. Events are in-person and virtual.`

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20,
        flex: 1
    },
    textcontainer: {
        padding: 20
    },
    title: {
        fontFamily: 'Ubuntu-Regular',
        paddingTop: 20
    },
    subtitle: {
        padding: 5,
        fontFamily: 'Ubuntu-Regular'
    },
    globologo: {
        height: 100,
        width: 400,
        resizeMode: 'contain'
    },
    heroimage: {
        width: '100%',
        height: 170
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    },
    menu:{
        position: 'absolute',
        bottom: 10
    }
})

export default Home;