import React from 'react';
import {View, Text, Linking, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const AttributionsItem = ({title, license, url}) => {
  return (
    <TouchableOpacity style={styles.articleItem}>
      <View style={styles.articleItemView}>
        <View style={styles.articleTextView}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.text}>Provided under the {license} license.</Text>
        </View>
        <Icon
          name="chevron-right"
          style={styles.icon}
          onPress={() => Linking.openURL(url)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  articleItem: {
    padding: 10,
    margin: 0.25,
    borderRadius: 10,
    backgroundColor: '#bbe1fa',
    borderBottomWidth: 1,
    borderColor: 'slategray',
    marginHorizontal: '2%',
  },
  articleItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleTextView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  text: {
    color: '#0f4c75',
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'sans-serif-medium',
  },
  heading: {
    color: '#0f4c75',
    fontSize: 14,
    fontFamily: 'sans-serif-medium',
  },
  icon: {
    fontSize: 20,
    color: '#0f4c75',
  },
});

export default AttributionsItem;
