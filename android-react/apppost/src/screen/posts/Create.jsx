import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {launchImageLibrary} from 'react-native-image-picker';

import Api from '../../services/api';

import styles from '../../styles';

import {handleErrors} from '../../utils/handleErrors';

const PostCreate = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const [errors, setErrors] = useState([]);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response) {
        setImage(response);
      }
    });
  };

  const storePost = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    if (image && image.assets && image.assets[0]) {
      formData.append('image', {
        uri: image.assets[0].uri,
        type: image.assets[0].type,
        name: image.assets[0].fileName,
      });
    }
    console.log(formData);
    try {
      await Api.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(() => {
        ToastAndroid.show('Post created successfully', ToastAndroid.SHORT);

        navigation.push('PostIndex');
      });
    } catch (error) {
      handleErrors(error.response.data, setErrors);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Post</Text>
      <View style={styles.line}></View>
      <View style={styles.form}>
        <View style={styles.upload}>
          <Button
            title="Choose Image"
            color="gray"
            onPress={handleChoosePhoto}
            style={styles.button}
          />
          {image && image.assets && image.assets[0] && (
            // <Text>{image.assets[0].fileName}</Text>
            <Image
              src={image.assets[0].uri}
              alt="alt"
              width={200}
              height={200}
            />
          )}
          {errors?.image && <Text style={styles.error}>{errors?.image}</Text>}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Title"
          defaultValue={title}
          onChangeText={value => setTitle(value)}
        />
        {errors?.title && <Text style={styles.error}>{errors?.title}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Content"
          defaultValue={content}
          onChangeText={value => setContent(value)}
        />
        {errors?.content && <Text style={styles.error}>{errors?.content}</Text>}
        <View
          style={{
            padding: 10,
          }}>
          <TouchableOpacity style={styles.button} onPress={storePost}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostCreate;
