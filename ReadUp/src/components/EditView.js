import React from 'react';
import ArticleList from './ArticleList';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import AddArticle from './AddArticle';
import {StyleSheet, SafeAreaView} from 'react-native';

const EditView = ({createEntry, deleteEntry, articles}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddArticle getData={createEntry} />
      <ArticleList articles={articles} deleteEntry={deleteEntry} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
    backgroundColor: '#3282b8',
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
