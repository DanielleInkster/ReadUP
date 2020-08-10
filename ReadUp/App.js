import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import Edit from './src/containers/Edit';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Edit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3282b8',
  },
  switch: {
    marginTop: '2%',
    marginRight: '2%',
    alignSelf: 'flex-end',
  },
});
