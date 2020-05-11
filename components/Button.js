import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    paddingTop: 12,
    height: 40,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    height: 40,
  },
});

type Props = {
  label: string,
  width: number,
  backgroundColor: string,
  handleOnPress: Function,
};

const Button = (props: Props) => {
  const {label, width, backgroundColor, handleOnPress} = props;
  return (
    <TouchableHighlight
      style={[{backgroundColor}, {width}, styles.wrapper]}
      onPress={handleOnPress}>
      <Text style={styles.buttonText}>{label.toUpperCase()}</Text>
    </TouchableHighlight>
  );
};

export default Button;
