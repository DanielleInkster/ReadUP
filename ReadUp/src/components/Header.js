import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require('../images/title.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '12%',
    backgroundColor: '#0f4c75',
  },
  image: {
    padding: '3%',
    alignSelf: 'center',
    marginTop: '3%',
  },
});

export default Header;
