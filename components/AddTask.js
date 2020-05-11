import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {addTask} from '../actions/task';

const AddTask = props => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Add task ..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (text) {
            props.add(text);
          } else {
            Alert.alert('Error', 'You must add text', {text: 'OK'});
          }
        }}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
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
