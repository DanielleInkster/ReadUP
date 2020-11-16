import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Accordian from '../components/Accordian';
import {licenses} from '../licenses';

const AboutPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Accordian data={licenses} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutPage;
