import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ImageBackground,
} from 'react-native';

function trim(item, limit) {
  return item.length > limit ? item.substring(0, limit).trim() + '...' : item;
}

const CarouselItem = ({item, index}) => {
  return (
    <View key={index} style={styles.container}>
      <ImageBackground
        source={require('../images/none.png')}
        imageStyle={{borderRadius: 15}}
        style={styles.background}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.textView}>
          <Text style={styles.text}>{trim(item.title, 50)}</Text>
          <Text style={styles.description}>{trim(item.description, 85)}</Text>
          <TouchableOpacity
            style={styles.link}
            onPress={() => Linking.openURL(item.url)}>
            <Text style={styles.linkText}>Read On</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    marginTop: '5%',
    marginBottom: '5%',
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 15,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
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
    backgroundColor: 'rgba(187,225,250,0.88)',
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
    borderRadius: 10,
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

export default CarouselItem;
