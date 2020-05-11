import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Todo')}>
        <Text style={styles.buttonText}>Go to my tasks</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00a896',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
