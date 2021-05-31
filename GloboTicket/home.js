import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.globologo}
            source={require('./images/dog.jpg')}
            />
            <Text style={styles.title}>Welcome To GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>

        </View>
    );
}

const introText = `Doggo ipsum doggorino wow very biscit borkdrive, lotsa pats. Very jealous pupper very taste wow bork heckin noodle horse corgo, doing me a frighten blep long water shoob h*ck. smol heck shoober. Blop snoot long woofer shoober, big ol shibe. Ruff boof woofer many pats, puggorino. Wow such tempt long bois smol borking doggo with a long snoot for pats dat tungg tho, pupperino very hand that feed shibe. Long water shoob shoob lotsa pats most angery pupper I have ever seen doggorino boofers, very good spot smol borking doggo with a long snoot for pats very hand that feed shibe length boy. Pupper I am bekom fat blep extremely cuuuuuute, fat boi extremely cuuuuuute. Boofers you are doing me the shock pats big ol heckin angery woofer fluffer pats, snoot porgo heckin good boys very good spot heck, you are doin me a concern very taste wow thicc borking doggo very good spot. Dat tungg tho maximum borkdrive long doggo waggy wags he made many woofs you are doing me the shock, pupperino borkdrive heckin angery woofer pupperino stop it fren floofs, shibe long doggo borkdrive noodle horse.`

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        paddingTop: 0
    },
    textcontainer: {
        textAlign: 'center',
        paddingTop: 10
    },
    title: {
        fontFamily: 'Ubuntu-Regular',
        paddingTop: 20
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-Regular'
    },
    globologo: {
        height: 200,
        width: 400,
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    }
})

export default Home;