import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.loader} source={require('../images/loader.webp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    marginTop: '50%',
    alignSelf: 'center',
  },
});
export default Loader;
