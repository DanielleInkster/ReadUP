import React from 'react';
import ArticleView from './ArticleView';
import AddArticle from './AddArticle';
import {StyleSheet, View, FlatList} from 'react-native';

const EditView = ({getData, articles}) => {
  return (
    <View style={styles.container}>
      <AddArticle getData={getData} />
      <FlatList
        style={styles.list}
        data={articles}
        renderItem={({item}) => <ArticleView article={item} />}
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
