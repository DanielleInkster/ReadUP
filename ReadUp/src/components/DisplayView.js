import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import Carousel from 'react-native-snap-carousel';

const _renderItem = ({item, index}) => {
  return (
    <View key={index}>
      {console.log(item)}
      <Text>{item.image}</Text>
      <Text>{item.title}</Text>
    </View>
  );
};

const DisplayView = ({articles}) => {
  return (
    <Carousel
      data={articles}
      renderItem={_renderItem}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width * 0.9}
    />
  );
};

export default withDatabase(
  withObservables([], ({database}) => ({
    articles: database.collections.get('articles').query().observe(),
  }))(DisplayView),
);
