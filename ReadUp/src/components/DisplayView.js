import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import Carousel from 'react-native-snap-carousel';

const _renderItem = ({item, index}) => {
  return (
    <View key={index} style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.text}>{item.title}</Text>
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
    marginBottom: '40%',
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
  },
});

export default withDatabase(
  withObservables([], ({database}) => ({
    articles: database.collections.get('articles').query().observe(),
  }))(DisplayView),
);
