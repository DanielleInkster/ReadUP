import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const NoItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Nothing to see here - yet! </Text>
      <Text style={styles.text}>Press the button to start adding articles. </Text>
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
    backgroundColor: 'rgba(187,225,250,0.88)',
    borderRadius: 15,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '70%',
    color: '#0f4c75',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '5%',
    color: '#0f4c75',
  },
});

export default NoItem;
