import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import AttributionsList from './AttributionsList';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Accordian({data}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text style={[styles.heading]}>Attributions</Text>
        <Icon
          style={styles.icon}
          name={
            isExpanded === true ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
          }
          size={30}
        />
      </TouchableOpacity>
      <SafeAreaView>
        {isExpanded === true && <AttributionsList data={data} />}
      </SafeAreaView>
    </View>
  );

  function toggleExpand() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  heading: {
    color: '#bbe1fa',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    alignContent: 'center',
    paddingBottom: '2%',
  },
  row: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: '#0f4c75',
  },
  icon: {
    color: '#bbe1fa',
  },
});
