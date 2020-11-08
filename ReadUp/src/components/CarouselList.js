import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CarouselList = ({articles, _renderItem, update}) => {
  return (
    <Carousel
      data={articles}
      renderItem={_renderItem}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width}
      onSnapToItem={(index) => update(index)}
      loop={true}
    />
  );
};
export default CarouselList;
