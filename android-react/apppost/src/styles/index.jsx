import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  form: {
    padding: 12,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#ddd',
    marginTop: 15,
  },
  upload: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 10,
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  textarea: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 24,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
  },
  button: {
    padding: 10,
    borderRadius: 24,
    backgroundColor: '#e91e63',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default styles;
