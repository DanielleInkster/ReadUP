import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import AttributionsItem from '../components/AttributionsItem';

const data = [
  {
    key: 1,
    title: 'My project',
    creator: 'Dani Inkster',
    url: 'http://www.google.com',
    icon: 'link',
  },
];

export default function About({articles}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <AttributionsItem
            title={item.title}
            creator={item.creator}
            url={item.url}
            icon={item.icon}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
