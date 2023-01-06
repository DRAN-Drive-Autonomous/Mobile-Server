import * as React from 'react';
import { View, Text } from 'react-native';
import {ThemeContext} from '../assets/styles/global';
import { useContext } from 'react';

export default function NetworkScreen({ navigation }) {
  const themeContext = useContext(ThemeContext);
  const globalStyles = themeContext.globalStyles;
  return (
    <View style={globalStyles.container}>
      <Text onPress={() => navigation.navigate('Home')} style={{ fontSize: 26, fontWeight: 'bold' }}>
        Coming Soon
      </Text>
    </View>
  );
}