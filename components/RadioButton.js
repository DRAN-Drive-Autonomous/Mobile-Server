import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {ThemeContext} from '../assets/styles/global';
import { useState, useContext } from 'react';

// 

export default function RadioButton({groupHead, data, onSelect, extraData, currentMode }) {
    const themeContext = useContext(ThemeContext);
    const globalStyles = themeContext.globalStyles;
    return (
        <View style={[styles.settingsBox, globalStyles.contrastOpac]}>
            <Text style={[styles.settingsBoxTitle, globalStyles.contrastText]}>{groupHead}</Text>
            {data.map((item, index) => {
                return (
                <Pressable
                key={index}
                onPress={() => {onSelect(item.mode);}}
                // onPress={() => alert(item.mode)}
                >
                    <Text 
                    style={
                        item.mode === currentMode ? [styles.settingsBoxCont, globalStyles.contrastText] : [styles.settingsBoxCont, globalStyles.regularText]
                    }> {item.value}</Text>
                </Pressable>);
        })}
        
            <Text style={[styles.settingsBoxNote, globalStyles.regularText]}>{extraData}</Text>
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

