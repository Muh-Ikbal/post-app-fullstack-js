import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const PostEdit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});

export default PostEdit;
