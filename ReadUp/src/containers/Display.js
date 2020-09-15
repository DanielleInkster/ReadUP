import React from 'react';
import DisplayView from '../components/DisplayView';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import {View, StyleSheet} from 'react-native';

export default function Edit() {
  return (
    <View>
      <DisplayView />
    </View>
  );
}
