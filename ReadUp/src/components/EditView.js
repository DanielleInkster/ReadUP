import React from 'react';
// import ArticleView from './ArticleView';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import withObservables from '@nozbe/with-observables';
import AddArticle from './AddArticle';
import {StyleSheet, View, FlatList} from 'react-native';

const EditView = ({getData}) => {
  return (
    <View style={styles.container}>
      <AddArticle getData={getData} />
      <FlatList
        style={styles.list}
        /* renderItem={({item}) => <ArticleView article={item} />} */
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3282b8',
  },
  list: {
    paddingVertical: '2%',
  },
});

export default EditView;
