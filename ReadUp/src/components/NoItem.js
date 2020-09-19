import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NoItem = () => {
  return (
    <View style={styles.container}>
      <Icon name="long-arrow-up" style={styles.icon} />
      <Text style={styles.heading}>Nothing to see here - yet! </Text>
      <Text style={styles.text}>
        Press the 'Edit' button to start adding articles.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    marginTop: '5%',
    marginBottom: '20%',
    alignSelf: 'center',
    backgroundColor: 'rgba(187,225,250,0.88)',
    borderRadius: 15,
  },
  icon: {
    fontSize: 75,
    alignSelf: 'flex-end',
    paddingRight: '5%',
    paddingTop: '5%',
    color: '#0f4c75',
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '30%',
    color: '#0f4c75',
  },
  text: {
    fontSize: 25,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '5%',
    color: '#0f4c75',
  },
});

export default NoItem;
