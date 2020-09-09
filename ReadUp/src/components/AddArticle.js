import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const AddArticle = ({getData}) => {
  const [articleText, setArticleText] = useState('');

  const onChange = (textValue) => setArticleText(textValue);

  return (
    <View>
      <TextInput
        value={articleText}
        testID="inputText"
        placeholder="Enter URL"
        style={styles.input}
        onChangeText={onChange}
      />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          testID="addButton"
          style={styles.btn}
          onPress={() => getData(articleText)}>
          <Text style={styles.btnText}>
            <Icon name="plus" size={15} />
            {'  Add Article'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          testID="clearButton"
          style={styles.btn}
          onPress={() => setArticleText('')}>
          <Text style={styles.btnText}>
            <Icon name="remove" size={15} />
            {'  Clear'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#bbe1fa',
    height: 70,
    padding: 8,
    borderRadius: 15,
    marginTop: '5%',
    marginHorizontal: 5,
    fontSize: 20,
    borderColor: '#1b262c',
    borderStyle: 'solid',
    borderWidth: 1.5,
  },

  btn: {
    backgroundColor: '#0f4c75',
    borderRadius: 15,
    padding: 9,
    height: 50,
    width: '40%',
    marginVertical: '6%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#bbe1fa',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddArticle;
