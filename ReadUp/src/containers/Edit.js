import React, {useContext} from 'react';
import EditView from '../components/EditView';
import {DbContext} from '../dB/dBProvider';
import {View, Alert, StyleSheet} from 'react-native';
import Cheerio from 'cheerio-without-node-native';

export default function Edit() {
  const database = useContext(DbContext);

  async function createEntry(title, description, url) {
    const articlesCollection = database.get('articles');
    await database.action(async () => {
      const newArticle = await articlesCollection.create((article) => {
        article.article_id = 3;
        article.title = title;
        article.description = description;
        article.url = url;
      });
      console.log(newArticle);
    });
    console.log(database);
  }

  async function getData(text) {
    const searchUrl = text;
    const response = await fetch(searchUrl); // fetch page
    const htmlString = await response.text(); // get response text
    const doc = Cheerio.load(htmlString); // parse HTML string
    const title = doc("meta[property='og:title']").attr('content');
    const description = getDescription(doc);
    const type = doc("meta[property='og:type']").attr('content');
    checkType(type);
    console.log(title, description, type);
    createEntry(title, description, text);
  }

  function checkType(type) {
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
  function getDescription(input) {
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
  return (
    <View style={styles.container}>
      <EditView getData={getData} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3282b8',
  },
});
