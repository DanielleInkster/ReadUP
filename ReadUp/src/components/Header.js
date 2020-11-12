import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Header = ({togglePress}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => togglePress()}>
        <Image style={styles.image} source={require('../images/title.jpg')} />
      </TouchableOpacity>
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
