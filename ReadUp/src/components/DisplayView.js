import React from 'react';
import {View, Text, Image, Dimensions, Linking, StyleSheet} from 'react-native';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import Carousel from 'react-native-snap-carousel';

const _renderItem = ({item, index}) => {
  return (
    <View key={index} style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(item.url)}>
        Read On
      </Text>
    </View>
  );
};

const DisplayView = ({articles}) => {
  return (
    <Carousel
      data={articles}
      renderItem={_renderItem}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width}
      containerCustomStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbe1fa',
    marginTop: '3%',
  },
  image: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  text: {
    color: '#1b262c',
    fontSize: 25,
    textAlign: 'center',
    marginHorizontal: '1%',
    marginVertical: '2%',
  },
  description: {
    color: '#1b262c',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: '1%',
  },
  link: {
    marginTop: '3%',
    color: '#f0a500',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: '1%',
  },
});

export default withDatabase(
  withObservables([], ({database}) => ({
    articles: database.collections.get('articles').query().observe(),
  }))(DisplayView),
);
