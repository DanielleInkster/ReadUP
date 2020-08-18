import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'ReadUp',
};

const styles = StyleSheet.create({
  header: {
    height: '15%',
    backgroundColor: '#0f4c75',
  },
  text: {
    padding: '18%',
    color: '#bbe1fa',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Header;
