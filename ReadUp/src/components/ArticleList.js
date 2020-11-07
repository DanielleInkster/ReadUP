import React from 'react';
import ArticleView from './ArticleView';
import {FlatList} from 'react-native';

const ArticleList = ({deleteEntry, articles}) => {
  return (
    <FlatList
      data={articles}
      renderItem={({item}) => (
        <ArticleView article={item} deleteEntry={deleteEntry} />
      )}
    />
  );
};
export default ArticleList;
