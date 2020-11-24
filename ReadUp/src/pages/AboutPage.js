import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Accordian from '../components/Accordian';
import InfoItem from '../components/InfoItem';
import {licenses} from '../licenses';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Accordian data={licenses} />
        <InfoItem
          title={'Code Source'}
          name={'github'}
          url={'https://github.com/DanielleInkster/ReadUP'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutPage;
