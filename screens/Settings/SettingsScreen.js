import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, FlatList } from 'react-native';
import {ThemeContext} from '../../assets/styles/global';
import RadioButton from '../../components/RadioButton';
import { useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const interfaceData = [
    { value: 'Light Mode', mode:'1',},
    { value: 'Dark Mode', mode:'2', },
    { value: 'Use System Settings', mode:'0', },
];

const predictionData = [
    { value: 'Use API Service', mode:'1',},
    { value: 'Use System', mode:'2', },
];

function SettingsScreen({ navigation }) {
    const themeContext = useContext(ThemeContext);
    const globalStyles = themeContext.globalStyles;
    const storeData = async (value, dataName) => {
        try {
          await AsyncStorage.setItem(dataName, value)
          themeContext.getGlobalStyles();
        } catch (e) {
          console.log(e);
        }
      }
    return (
        <View style={globalStyles.container}>
            <RadioButton groupHead={'Interface'} data={interfaceData} currentMode={themeContext.themeMode} onSelect={(value) => {storeData(value=value, dataName='theme');}} />
            <RadioButton groupHead={'Prediction'} data={predictionData} currentMode={'1'} onSelect={(value) => {storeData(value=value, dataName='service');}} extraData={'API Service requires good internet connection and System requires good specification otherwise system will hang.'} />
        </View>
    );
}

const styles = StyleSheet.create({
    settingsBox:{
        padding:10,
        margin:10,
        marginTop:10,
        borderBottomWidth:1,
    },

    settingsBoxTitle:{
        fontSize:25,
        marginBottom:15,
    },

    settingsBoxCont:{
        fontSize:20,
        margin:5,
    },

    settingsBoxNote:{
        fontSize:20,
        marginTop:10,
    },
})

export default SettingsScreen;