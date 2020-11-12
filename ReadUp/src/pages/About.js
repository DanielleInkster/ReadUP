import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import AttributionsItem from '../components/AttributionsItem';

const data = [
  {
    key: '1',
    title: 'WatermelonDB',
    license: 'MIT',
    url: 'https://github.com/Nozbe/WatermelonDB',
  },
  {
    key: '2',
    title: 'withObservables',
    license: 'MIT',
    url: 'https://github.com/Nozbe/withObservables',
  },
  {
    key: '3',
    title: 'Cheerio Without Node Native',
    license: 'MIT',
    url: 'https://github.com/oyyd/cheerio-without-node-native',
  },
  {
    key: '4',
    title: 'React Native Gesture Handler',
    license: 'MIT',
    url: 'https://github.com/software-mansion/react-native-gesture-handler',
  },
  {
    key: '5',
    title: 'React Native Snap Carousel',
    license: 'BSD-3-Clause',
    url: 'https://github.com/archriss/react-native-snap-carousel',
  },
  {
    key: '6',
    title: 'React Native Splash Screen',
    license: 'MIT',
    url: 'https://github.com/crazycodeboy/react-native-splash-screen',
  },
  {
    key: '7',
    title: 'React Native Vector Icons',
    license: 'MIT',
    url: 'https://github.com/oblador/react-native-vector-icons',
  },
  {
    key: '8',
    title: 'React Native',
    license: 'MIT',
    url: 'https://github.com/facebook/react-native',
  },
  {
    key: '9',
    title: 'React',
    license: 'MIT',
    url: 'https://github.com/facebook/react/raw/master/LICENSE',
  },
];

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Attributions</Text>
      <FlatList
        data={data}
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
