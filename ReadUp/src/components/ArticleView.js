import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const ArticleView = ({article, deleteEntry}) => {
  return (
    <TouchableOpacity style={styles.articleItem}>
      <View style={styles.articleItemView}>
        <Text style={styles.text}>
          {article.title.substring(0, 30).trim()}...
        </Text>
        <Icon
          name="remove"
          style={styles.icon}
          onPress={() => deleteEntry(article)}
          testID="removeArticle"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  articleItem: {
    padding: 20,
    backgroundColor: '#bbe1fa',
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginVertical: '1%',
  },
  articleItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#1b262c',
    fontSize: 18,
  },
  icon: {
    fontSize: 25,
    color: 'firebrick',
  },
});

export default ArticleView;
