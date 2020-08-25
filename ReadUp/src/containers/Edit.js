import React from 'react';
import EditView from '../components/EditView';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import {View, StyleSheet} from 'react-native';
import Cheerio from 'cheerio-without-node-native';

export default function Edit() {
  const database = useDatabase();
  const articlesCollection = database.get('articles');

  async function scrapeData(text) {
    const searchUrl = text;
    const response = await fetch(searchUrl); // fetch page
    const htmlString = await response.text(); // get response text
    const doc = Cheerio.load(htmlString); // parse HTML string
    return doc;
  }

  function getTitle(doc) {
    return doc("meta[property='og:title']").attr('content');
  }

  function getImage(doc) {
    return doc("meta[property='og:image']").attr('content');
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

  async function createDBEntry(title, description, img, url) {
    await database.action(async () => {
      const newArticle = await articlesCollection.create((article) => {
        article.title = title;
        article.img = img;
        article.description = description;
        article.url = url;
      });
    });
  }

  async function createEntry(text) {
    const data = await scrapeData(text);
    const title = await getTitle(data);
    const description = await getDescription(data);
    const img = await getImage(data);
    createDBEntry(title, description, img, text);
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
