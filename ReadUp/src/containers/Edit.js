import React from 'react';
import EditView from '../components/EditView';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import {View, Alert, StyleSheet} from 'react-native';
import Cheerio from 'cheerio-without-node-native';

export default function Edit() {
  const database = useDatabase();
  const articlesCollection = database.get('articles');

  async function createEntry(title, description, img, url) {
    await database.action(async () => {
      const newArticle = await articlesCollection.create((article) => {
        article.title = title;
        article.img = img;
        article.description = description;
        article.url = url;
      });
    });
  }

  async function deleteEntry(article) {
    await database.action(async () => {
      await article.destroyPermanently();
    });
  }

  async function getData(text) {
    const searchUrl = text;
    const response = await fetch(searchUrl); // fetch page
    const htmlString = await response.text(); // get response text
    const doc = Cheerio.load(htmlString); // parse HTML string
    const title = doc("meta[property='og:title']").attr('content');
    const description = getDescription(doc);
    const img = doc("meta[property='og:image']").attr('content');
    console.log(img);
    createEntry(title, description, img, text);
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
      <EditView getData={getData} deleteEntry={deleteEntry} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3282b8',
  },
});
