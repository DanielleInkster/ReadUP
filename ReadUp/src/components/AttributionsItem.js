import React from 'react';
import {View, Text, Linking, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const AttributionsItem = ({title, creator, url, icon}) => {
  return (
    <TouchableOpacity style={styles.articleItem}>
      <View style={styles.articleItemView}>
        <Icon
          name={icon}
          style={styles.icon}
          onPress={() => Linking.openURL(url)}
        />
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{creator}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  articleItem: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#bbe1fa',
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginVertical: '3%',
    marginHorizontal: '2%',
  },
  articleItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#1b262c',
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
  },
  icon: {
    fontSize: 25,
    color: 'grey',
  },
});

export default AttributionsItem;
