import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import NoItem from '../components/NoItem';
import Loader from '../components/Loader';
import ArticleCarousel from '../components/ArticleCarousel';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';

function DisplayView({articles}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('mounting!');
    // setIsLoading(true);
  }, [setIsLoading]);

  return (
    <View style={styles.container}>
      <Loader />
      {/* {articles.length === 0 && <NoItem />} */}
      {/* {articles.length > 0 && <ArticleCarousel articles={articles} />} */}
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
