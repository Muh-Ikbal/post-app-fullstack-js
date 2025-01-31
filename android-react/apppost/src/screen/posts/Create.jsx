import {
  View,
  Text,
  TextInput,
  Button,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {launchImageLibrary} from 'react-native-image-picker';

import Api from '../../services/api';

import styles from '../../styles';

import { handleErrors } from '../../utils/handleErrors';


const PostCreate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Post</Text>
      
    </View>
  );
};

export default PostCreate;
