import React, {Component} from 'react';
import EditView from '../components/EditView';
import {View, StyleSheet, Alert} from 'react-native';
import Cheerio from 'cheerio-without-node-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3282b8',
  },
});

class Edit extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async getData(text) {
    const searchUrl = text;
    const response = await fetch(searchUrl); // fetch page
    const htmlString = await response.text(); // get response text
    const doc = Cheerio.load(htmlString); // parse HTML string
    const title = doc("meta[property='og:title']").attr('content');
    const description = this.getDescription(doc);
    const type = doc("meta[property='og:type']").attr('content');
    this.checkType(type);
    console.log(title, description, type);
    return `${title}\n${description}\n${type}`;
  }

  checkType(type) {
    if (type === undefined) {
      Alert.alert(
        'Hmmm...',
        'This link may not be an article. Are you sure you want to add it?',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  }

  getDescription(input) {
    let description = '';

    if (
      input("meta[property='og:description']").attr('content') !== undefined
    ) {
      description = input("meta[property='og:description']").attr('content');
    } else if (
      input("meta[name='description']").attr('content') !== undefined
    ) {
      description = input("meta[name='description']").attr('content');
    } else {
      description = 'No description available';
    }
    return description;
  }

  render() {
    return (
      <View style={styles.container}>
        <EditView getData={this.getData} />
      </View>
    );
  }
}

export default Edit;
