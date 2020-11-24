import React from 'react';
import AttributionsItem from './AttributionsItem';
import {FlatList} from 'react-native';

const AttributionsList = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <AttributionsItem
          title={item.title}
          license={item.license}
          url={item.url}
        />
      )}
    />
  );
};
export default AttributionsList;
