import React from 'react';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import {View, StyleSheet} from 'react-native';
import {database} from './index.js';
import Header from './src/components/Header';
import Edit from './src/containers/Edit';

export default function App() {
  return (
    <DatabaseProvider database={database}>
      <View style={styles.container}>
        <Header />
        <Edit />
      </View>
    </DatabaseProvider>
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
