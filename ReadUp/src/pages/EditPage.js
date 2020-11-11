import React from 'react';
import ArticleList from '../components/ArticleList';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import AddArticle from '../components/AddArticle';
import {StyleSheet, TouchableOpacity, Text, SafeAreaView} from 'react-native';

const EditView = ({createEntry, deleteEntry, articles}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddArticle getData={createEntry} />
      <ArticleList articles={articles} deleteEntry={deleteEntry} />
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.text}> About </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
    backgroundColor: '#3282b8',
  },
  footer: {
    backgroundColor: '#0f4c75',
    height: '7.2%',
    width: '100%',

    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginTop: '2%',
    color: '#bbe1fa',
    fontWeight: 'bold',
  },
});

export default withDatabase(
  withObservables(['activeFilter'], ({database}) => ({
    articles: database.collections
      .get('articles')
      .query()
      .observeWithColumns(['title']),
  }))(EditView),
);
