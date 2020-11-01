import React, {useState, useEffect} from 'react';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import SplashScreen from 'react-native-splash-screen';
import {View, Switch, StyleSheet} from 'react-native';
import {database} from './index.js';
import Header from './src/components/Header';
import DisplayView from './src/components/DisplayView';
import Edit from './src/containers/Edit';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <DatabaseProvider database={database}>
      <View style={styles.container}>
        <Header />
        <Switch
          style={styles.switch}
          trackColor={{true: '#bbe1fa'}}
          thumbColor={'#f0a500'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {isEnabled === true && <Edit />}
        {isEnabled === false && <DisplayView />}
      </View>
    </DatabaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3282b8',
  },
  switch: {
    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
    paddingBottom: '2%',
    marginTop: '3%',
    marginRight: '3%',
    alignSelf: 'flex-end',
  },
});
