import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CarouselList from './CarouselList';
import CarouselItem from './CarouselItem';
import PaginationList from './PaginationList';

const _renderItem = ({item, index}) => {
  return <CarouselItem item={item} index={index} />;
};

function ArticleCarousel({articles}) {
  const [activeSlide, update] = useState(0);

  return (
    <View style={styles.container}>
      <CarouselList
        articles={articles}
        update={(index) => update(index)}
        _renderItem={_renderItem}
      />
      <PaginationList articles={articles} activeSlide={activeSlide} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3282b8',
  },
});

export default ArticleCarousel;
