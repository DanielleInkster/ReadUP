import React from 'react';
import {View, Text} from 'react-native';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';

const DisplayView = () => {
  return (
    <View>
      <Text>'Allo Guv'nor!</Text>
    </View>
  );
};
export default withDatabase(
  withObservables([], ({database}) => ({
    articles: database.collections.get('articles').query().observe(),
  }))(DisplayView),
);
