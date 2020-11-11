import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/loader.webp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Loader;
