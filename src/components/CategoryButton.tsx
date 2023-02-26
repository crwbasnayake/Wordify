import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryButton = (props: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.categoryButton,
      ]}
      onPress={props.onSelect}
    >
      <Text
        style={[
          styles.categoryButtonText,
        ]}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    margin: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: "700"
  },
});

export default CategoryButton;
