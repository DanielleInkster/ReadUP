import React from 'react';
import {View, StyleSheet} from 'react-native';
import NoItem from './NoItem';
import ArticleCarousel from './ArticleCarousel';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';

function DisplayView({articles}) {
  return (
    <View style={styles.container}>
      {articles.length === 0 && <NoItem />}
      {articles.length > 0 && <ArticleCarousel articles={articles} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withDatabase(
  withObservables([], ({database}) => ({
    articles: database.collections.get('articles').query().observe(),
  }))(DisplayView),
);
