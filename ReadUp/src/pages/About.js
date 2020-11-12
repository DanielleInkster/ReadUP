import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import AttributionsItem from '../components/AttributionsItem';
import {licenses} from '../licenses';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Attributions</Text>
      <FlatList
        data={licenses}
        renderItem={({item}) => (
          <AttributionsItem
            title={item.title}
            license={item.license}
            url={item.url}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
  },
  heading: {
    color: '#bbe1fa',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    alignSelf: 'center',
    paddingBottom: '2%',
  },
});
