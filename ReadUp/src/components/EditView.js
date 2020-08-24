import React from 'react';
import ArticleView from './ArticleView';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import AddArticle from './AddArticle';
import {StyleSheet, View} from 'react-native';
import {List, ListItem, Body} from 'native-base';

const EditView = ({getData, articles}) => {
  return (
    <View style={styles.container}>
      <AddArticle getData={getData} />
      <List>
        {articles.map((article) => (
          <ListItem key={article.id}>
            <Body>
              <ArticleView article={article} />
            </Body>
          </ListItem>
        ))}
      </List>
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

export default withDatabase(
  withObservables([], ({database}) => ({
    articles: database.collections.get('articles').query().observe(),
  }))(EditView),
);
