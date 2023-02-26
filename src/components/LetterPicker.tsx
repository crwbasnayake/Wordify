import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const LetterPicker = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.guessSquare}>
        <Text style={styles.guessLetter}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  guessSquare: {
    borderColor: '#d3d6da',
    borderWidth: 2,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  guessLetter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default LetterPicker;
