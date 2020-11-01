import React from 'react';
import EditView from '../components/EditView';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import {Q} from '@nozbe/watermelondb';
import {View, StyleSheet, Alert} from 'react-native';
import Cheerio from 'cheerio-without-node-native';

export default function Edit() {
  const validator = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const database = useDatabase();
  const articlesCollection = database.get('articles');

  function checkValidity(text) {
    return validator.test(text);
  }

  function createAlert(message, message2) {
    return Alert.alert(message, message2, [{text: 'OK'}], {cancelable: false});
  }

  async function scrapeData(text) {
    try {
      const searchUrl = text;
      const response = await fetch(searchUrl);
      const htmlString = await response.text();
      const doc = Cheerio.load(htmlString);
      return doc;
    } catch (e) {
      if (e.message === 'Network request failed') {
        createAlert(
          'Unable to create an entry',
          "There may be a connectivity issue, or the URL doesn't provide enough information.",
        );
        return e.message;
      }
    }
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

  async function createDBEntry(title, description, image, url, num = 20) {
    let count = await articlesCollection.query(Q.where('url', Q.notEq(null)))
      .count;
    if (count < num) {
      await database.action(async () => {
        const newArticle = await articlesCollection.create((article) => {
          article.title = title;
          article.image = image;
          article.description = description;
          article.url = url;
        });
      });
    } else {
      createAlert('Database full', `Maximum of ${num} entries`);
    }
  }

  function enterData(data, text) {
    if (data !== 'Network request failed') {
      const title = getInfo(data, 'title');
      const description = getInfo(data, 'description');
      const image = getInfo(data, 'image');
      createDBEntry(title, description, image, text);
    }
  }

  async function createEntry(text) {
    if (checkValidity(text.toLowerCase()) === true) {
      const data = await scrapeData(text);
      enterData(data, text);
    } else {
      createAlert('Please enter a valid URL');
    }
  }

  async function deleteEntry(article) {
    Alert.alert(
      'Are you sure you want to delete this article?',
      'This action cannot be undone',
      [
        {
          text: 'Delete',
          onPress: () =>
            database.action(async () => {
              await article.destroyPermanently();
            }),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
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
