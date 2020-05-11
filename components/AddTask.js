import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import {addTask} from '../actions/task';
import Button from './Button';

const AddTask = props => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);

  const create = val => {
    if (val) {
      props.add(val);
    } else {
      Alert.alert('ERROR', 'You must add text', {text: 'OK'});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add task ..."
        style={styles.input}
        onChangeText={onChange}
      />
      <Button
        label="ADD TASK"
        width={160}
        backgroundColor="#00a896"
        handleOnPress={() => create(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
});

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.taskList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: task => dispatch(addTask(task)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTask);
