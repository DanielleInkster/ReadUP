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
      <Text style={styles.description}>
        {item.description.substring(0, 85).trim()}...
      </Text>
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
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#bbe1fa',
    marginTop: '10%',
    marginBottom: '30%',
    width: '95%',
    alignSelf: 'center',
  },
  image: {
    marginVertical: '3%',
    height: '50%',
    width: '80%',
    alignSelf: 'center',
  },
  text: {
    color: '#0f4c75',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: '3%',
    marginVertical: '2%',
  },
  description: {
    color: '#0f4c75',
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: '1%',
  },
  link: {
    marginTop: '5%',
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
