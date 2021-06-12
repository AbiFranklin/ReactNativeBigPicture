import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet, Alert} from 'react-native';

const Contact = ({navigation}) => {
  const [formName, setFormName] = useState('Enter Name');
  const [formEmail, setFormEmail] = useState('Enter Email');
  const [phoneNumber, setPhoneNumber] = useState('Enter Phone Number');
  const [message, setMessage] = useState('Let us know what is on your mind');

  const submit = () => {
    if (!formName || !formEmail || !message) {
      Alert.alert('Please enter info in all required fields.');
    } else {
      Alert.alert(`Thank you ${formName}`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Name: *required</Text>
      <TextInput
        style={styles.txtinput}
        onChange={name => {
          setFormName(name.nativeEvent.text);
        }}
        value={formName}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />

      <Text style={styles.label}>Email: *required</Text>
      <TextInput
        style={styles.txtinput}
        onChange={email => setFormEmail(email.nativeEvent.text)}
        value={formEmail}
        selectTextOnFocus={true}
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.txtinput}
        onChange={number => setPhoneNumber(number.nativeEvent.text)}
        value={phoneNumber}
        selectTextOnFocus={true}
      />

      <Text style={styles.label}>Message: *required</Text>
      <TextInput
        style={styles.multitxtinput}
        onChange={message => setMessage(message.nativeEvent.text)}
        value={message}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
      />

      <Button title="Contact Us" color="#708090" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 18,
  },
  label: {
    fontFamily: 'Ubuntu-Regular',
  },
  txtinput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    width: '80%',
    paddingBottom: 15,
  },
  multitxtinput: {
    width: '90%',
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    height: 120,
    marginBottom: 50,
  },
});

export default Contact;
