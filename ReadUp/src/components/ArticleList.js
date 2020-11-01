import React, {useMemo} from 'react';
import ArticleView from './ArticleView';
import {FlatList} from 'react-native';

const ArticleList = ({deleteEntry, articles}) => {
  const listComponent = useMemo(() => {
    return (
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ArticleView article={item} deleteEntry={deleteEntry} />
        )}
      />
    );
  }, [articles, deleteEntry]);

  return listComponent;
};
export default ArticleList;
