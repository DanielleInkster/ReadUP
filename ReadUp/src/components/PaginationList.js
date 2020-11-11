import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Pagination} from 'react-native-snap-carousel';

const PaginationList = ({articles, activeSlide}) => {
  const paginationComponent = useMemo(() => {
    return (
      <Pagination
        dotsLength={articles.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerStyle}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={{}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        animatedDuration={100}
        animatedTension={5}
      />
    );
  }, [articles, activeSlide]);

  return paginationComponent;
};
export default PaginationList;

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: '4%',
    backgroundColor: 'rgba(15, 76, 117, 1)',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'rgba(187,225,250, 0.92)',
  },
});
