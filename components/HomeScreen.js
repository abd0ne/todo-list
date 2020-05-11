import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        label="MY TASKS"
        width={160}
        backgroundColor="#00a896"
        handleOnPress={() => navigation.navigate('Todo')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
