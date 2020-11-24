import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Accordian from '../components/Accordian';
import InfoItem from '../components/InfoItem';
import {licenses} from '../licenses';

const AboutPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Accordian data={licenses} />
      <InfoItem
        title={'Code Source'}
        name={'github'}
        url={'https://github.com/DanielleInkster/ReadUP'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutPage;
