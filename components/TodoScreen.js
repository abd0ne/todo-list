import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListTask from './ListTask';
import AddTask from './AddTask';
import {connect} from 'react-redux';
import {deleteTask} from '../actions/task';

const TodoScreen = props => {
  return (
    <View style={styles.container}>
      <AddTask addItem={() => props.add('test')} />
      <View style={styles.list}>
        <FlatList
          data={props.tasks}
          renderItem={({item}) => (
            <ListTask item={item} deleteItem={() => props.delete(item.id)} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.taskList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch(deleteTask(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoScreen);
