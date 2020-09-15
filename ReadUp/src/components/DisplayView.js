import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import CarouselItem from './CarouselItem';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import Carousel from 'react-native-snap-carousel';

const _renderItem = ({item, index}) => {
  return <CarouselItem item={item} index={index} />;
};

const DisplayView = ({articles}) => {
  return (
    <Carousel
      data={articles}
      renderItem={_renderItem}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width}
      loop={true}
    />
  );
};

export default withDatabase(
  withObservables([], ({database}) => ({
    articles: database.collections.get('articles').query().observe(),
  }))(DisplayView),
);
