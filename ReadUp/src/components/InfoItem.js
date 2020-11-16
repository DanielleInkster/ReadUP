import React from 'react';
import {TouchableOpacity, Linking, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InfoItem = ({title, url, name}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={() => Linking.openURL(url)}>
      <Text style={[styles.heading]}>{title}</Text>
      <Icon name={name} size={30} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    color: '#bbe1fa',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    alignContent: 'center',
    paddingBottom: '2%',
  },
  row: {
    marginTop: '.25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: '#0f4c75',
  },
  icon: {
    color: '#bbe1fa',
  },
});

export default InfoItem;
