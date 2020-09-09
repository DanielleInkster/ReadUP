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
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import Carousel from 'react-native-snap-carousel';

const _renderItem = ({item, index}) => {
  return (
    <View key={index} style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.textView}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.description}>
          {item.description.substring(0, 85).trim()}...
        </Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.linkText}>Read On</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: '5%',
    marginBottom: '10%',
    width: '95%',
    alignSelf: 'center',
  },
  image: {
    borderRadius: 15,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  textView: {
    flex: 1,
    height: '45%',
    marginTop: '-60%',
    opacity: 0.88,
    backgroundColor: '#bbe1fa',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  text: {
    color: '#0f4c75',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: '3%',
    marginVertical: '5%',
  },
  description: {
    color: '#0f4c75',
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: '1%',
  },
  link: {
    opacity: 1.5,
    position: 'absolute',
    bottom: '5%',
    width: '95%',
    borderRadius: 15,
    backgroundColor: '#0f4c75',
    marginHorizontal: '1%',
    alignSelf: 'center',
  },
  linkText: {
    color: '#bbe1fa',
    padding: '3%',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default withDatabase(
  withObservables([], ({database}) => ({
    articles: database.collections.get('articles').query().observe(),
  }))(DisplayView),
);
