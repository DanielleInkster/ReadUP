import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function About({articles}) {
  return (
    <View style={styles.container}>
      <Text>i'm a new page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
