import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';

const App = () => {
  const [items, setItems] = useState([{id: Math.random(), text: 'My task'}]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'You must add text', {text: 'OK'});
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTask addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListTask item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
  },
});

export default App;
