import React from 'react';
import EditView from '../components/EditView';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import {View, StyleSheet, Alert} from 'react-native';
import Cheerio from 'cheerio-without-node-native';

export default function Edit() {
  const validator = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const database = useDatabase();
  const articlesCollection = database.get('articles');

  function checkValidity(text) {
    return validator.test(text);
  }

  async function scrapeData(text) {
    const searchUrl = text;
    const response = await fetch(searchUrl);
    const htmlString = await response.text();
    const doc = Cheerio.load(htmlString);
    return doc;
  }

  function getInfo(data, value) {
    let output = '';
    if (
      data("meta[property='og:" + `${value}` + "']").attr('content') !==
      undefined
    ) {
      output = data("meta[property='og:" + `${value}` + "']").attr('content');
    } else if (
      data("meta[name='" + `${value}` + "']").attr('content') !== undefined
    ) {
      output = data("meta[name='" + `${value}` + "']").attr('content');
    } else {
      output = `No ${value} available`;
    }
    return output;
  }

  async function createDBEntry(title, description, image, url) {
    await database.action(async () => {
      const newArticle = await articlesCollection.create((article) => {
        article.title = title;
        article.image = image;
        article.description = description;
        article.url = url;
      });
    });
  }

  async function createEntry(text) {
    if (checkValidity(text) === true) {
      const data = await scrapeData(text);
      const title = await getInfo(data, 'title');
      const description = await getInfo(data, 'description');
      const image = await getInfo(data, 'image');
      createDBEntry(title, description, image, text);
    } else {
      Alert.alert(
        'Please enter a valid url',
        [
          {
            text: 'OK',
          },
        ],
        {cancelable: false},
      );
    }
  }

  async function deleteEntry(article) {
    await database.action(async () => {
      await article.destroyPermanently();
    });
  }

  return (
    <View style={styles.container}>
      <EditView createEntry={createEntry} deleteEntry={deleteEntry} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3282b8',
  },
});
