import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import globoTickets from './ticketsdb';

const TicketPurchase = ({route, navigation}) => {
  const [quantity, setQuantity] = useState('1');
  const {ticketID} = route.params;
  const selectedEvent = globoTickets.find(
    tickets => tickets.eventId === ticketID,
  );

  const purchase = () => {
    var price = selectedEvent.price * quantity;
    Alert.alert(`Your cost is $${price}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedEvent.event}</Text>
      <Image style={styles.ticketimage} source={selectedEvent.image} />
      <Text style={styles.shortdescription}>
        {selectedEvent.shortDescription}
      </Text>
      <Text style={styles.description}>{selectedEvent.description}</Text>
      <View style={styles.purchaserow}>
        <Text style={styles.shortDescription}>Quantitiy: </Text>
        <TextInput
          style={styles.quantityinput}
          onChangeText={quantity => setQuantity(quantity)}
          value={quantity}
          selectTextOnFocus={true}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.price}>
          Total Price: ${selectedEvent.price * quantity}
      </Text>
      <TouchableOpacity onPress={purchase} style={styles.button}>
          <Text style={styles.buttontext}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 10
  },
  title: {
      fontFamily: 'Ubuntu-Regular',
      paddingBottom: 10
  },
  ticketimage: {
      height: 180,
      width: '100%'
  },
  shortdescription: {
      fontFamily: 'Ubuntu-Regular',
      paddingTop: 5,
      textAlignVertical: 'center'
  },
  description: {
      textAlign: 'left',
      fontFamily: 'Ubuntu-Light',
      fontWeight: '600',
      padding: 10
  },
  purchaserow: {
      flexDirection: 'row'
  },
  quantityinput: {
      borderWidth: 1,
      fontFamily: 'Ubuntu-Regular',
      height: 38,
      width: 40,
      marginLeft: 25
  },
  price: {
      fontFamily: 'Ubuntu-Regular',
      paddingTop: 5,
      paddingBottom: 10
  },
  button: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      width: '60%'
  },
  buttontext: {
      fontFamily: 'Ubuntu-Regular',
      textAlign: 'center',
      padding: 5
  }
});

export default TicketPurchase;