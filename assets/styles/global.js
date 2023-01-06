import {StyleSheet} from 'react-native';
import { Appearance, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { createContext } from 'react';

const backSecColorDark = '#222233';
const backSecColorLight = '#eeeeee';
const backColorDark = '#22222c';
const backColorLight = '#ffffff';
const contrastColorDark = '#ff8800';
const contrastColorLight = '#e86800';
const statusBarStyleDark = 'dark-content';
const statusBarStyleLight = 'light-content';

const globalStylesDark = StyleSheet.create({
    container:{
        backgroundColor: '#22222c',
        height:"100%", 
    },

    contrastOpac:{
        borderBottomColor:"#905516",
    },

    contrastText:{
        color:"#ff8800",
    },

    regularText:{
        color:"#ffffff",
    },

    regularSubText:{
        color:"#999999",
    },

    contrastBox:{
        borderColor:"#ff8800",
        borderWidth:1,
        borderRadius:10,
    },
});

const globalStylesLight = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        height:"100%", 
    },

    contrastOpac:{
        borderBottomColor:"#f4b480",
    },

    contrastText:{
        color:"#e86800",
    },

    regularText:{
        color:"#111",
    },

    regularSubText:{
        color:"#888888",
    },

    contrastBox:{
        borderColor:"#ff8800",
        borderWidth:1,
        borderRadius:10,
    },
});

const ThemeContext = createContext();

const ThemeState =(props) => {
    const [themeMode, setThemeMode] = useState('0');
    const [globalStyles, setGlobalStyles] = useState(globalStylesLight);
    const [backSecColor, setBackSecColor] = useState(backSecColorLight);
    const [backColor, setBackColor] = useState(backColorLight);
    const [contrastColor, setContrastColor] = useState(contrastColorLight);
    const [statusBarStyle, setStatusBarStyle] = useState(statusBarStyleDark);

    const getGlobalStyles = async () => {
        let value;
        try {
        value = await AsyncStorage.getItem('theme')
        if(value === null) {
            value = '0';
            await AsyncStorage.setItem('theme', value)
        }
        } catch(e) {
        console.log(e);
        }
        setThemeMode(value);
        if (themeMode === '0'){
            let colorScheme =Appearance.getColorScheme();
            if (colorScheme === 'dark'){
                setBackColor(backColorDark);
                setStatusBarStyle(statusBarStyleLight);
                StatusBar.setBackgroundColor(backColor);
                StatusBar.setBarStyle(statusBarStyle);
                setGlobalStyles(globalStylesDark);
                setBackSecColor(backSecColorDark);
                setContrastColor(contrastColorDark);
            } else{
                setBackColor(backColorLight);
                setStatusBarStyle(statusBarStyleDark);
                StatusBar.setBackgroundColor(backColor);
                StatusBar.setBarStyle(statusBarStyle);
                setGlobalStyles(globalStylesLight);
                setBackSecColor(backSecColorLight);
                setContrastColor(contrastColorLight);
            }
        } else if (themeMode == '1'){
            setBackColor(backColorLight);
            setStatusBarStyle(statusBarStyleDark);
            StatusBar.setBackgroundColor(backColor);
            StatusBar.setBarStyle(statusBarStyle);
            setGlobalStyles(globalStylesLight);
            setBackSecColor(backSecColorLight);
            setContrastColor(contrastColorLight);
        } else {
            setBackColor(backColorDark);
            setStatusBarStyle(statusBarStyleLight);
            StatusBar.setBackgroundColor(backColor);
            StatusBar.setBarStyle(statusBarStyle);
            setGlobalStyles(globalStylesDark);
            setBackSecColor(backSecColorDark);
            setContrastColor(contrastColorDark);
        }
    };

    getGlobalStyles();
    return (
        <ThemeContext.Provider value={{globalStyles:globalStyles, getGlobalStyles:getGlobalStyles, backColor:backColor, backSecColor:backSecColor, contrastColor:contrastColor, themeMode:themeMode, statusBarStyle:statusBarStyle}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export {ThemeState, ThemeContext};