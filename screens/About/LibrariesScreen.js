import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, FlatList, ScrollView } from 'react-native';
import {ThemeContext} from '../assets/styles/global';
import { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

function LibrariesScreen({ navigation }) {
    const themeContext = useContext(ThemeContext);
    const globalStyles = themeContext.globalStyles;

    const settingsData = require('../assets/json/AboutData.json');
    const mobileData = settingsData.libraries.mobile;
    const clientData = settingsData.libraries.client;
    const serverData = settingsData.libraries.server;
    const apiData = settingsData.libraries.api;
    const networkData = settingsData.libraries.networks;

    const Item = ({ item }) => (
        <View style={styles.packageBox}>
            <View style={styles.packageSubBox}>
            <Ionicons name={'code'} size={30} style={globalStyles.regularText} />
            </View>
            <View style={styles.packageSubBox}>
                <Text style={[styles.packageName, globalStyles.regularText]}>{item.name}</Text>
                <Text style={[styles.packageVersion, globalStyles.regularSubText]}>Version: {item.version}</Text>
                {(item.license !== '') ? <Text style={[styles.packageLicense, globalStyles.regularSubText]}>License: {item.license}</Text> : ''}
                
            </View>
        </View>
    );
    return (
        <ScrollView>
        <View style={globalStyles.container}>
            <View style={[styles.libraryBox, globalStyles.contrastOpac]}>
                <Text style={[styles.libraryBoxHead, globalStyles.contrastText]}>Mobile Application</Text>
                {mobileData.map((item, index) => {
                    return(<Item item={item} key={item.name} />);
                })}
            </View>
            <View style={[styles.libraryBox, globalStyles.contrastOpac]}>
                <Text style={[styles.libraryBoxHead, globalStyles.contrastText]}>Client Application</Text>
                {clientData.map((item, index) => {
                    return(<Item item={item} key={item.name} />);
                })}
            </View>
            <View style={[styles.libraryBox, globalStyles.contrastOpac]}>
                <Text style={[styles.libraryBoxHead, globalStyles.contrastText]}>Server Application</Text>
                {serverData.map((item, index) => {
                    return(<Item item={item} key={item.name} />);
                })}
            </View>
            <View style={[styles.libraryBox, globalStyles.contrastOpac]}>
                <Text style={[styles.libraryBoxHead, globalStyles.contrastText]}>API Service</Text>
                {apiData.map((item, index) => {
                    return(<Item item={item} key={item.name} />);
                })}
            </View>
            <View style={[styles.libraryBox, globalStyles.contrastOpac]}>
                <Text style={[styles.libraryBoxHead, globalStyles.contrastText]}>Neural Networks Service</Text>
                {networkData.map((item, index) => {
                    return(<Item item={item} key={item.name} />);
                })}
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    libraryBox:{
        padding:10,
        margin:10,
        marginTop:10,
        borderBottomWidth:1,
    },

    libraryBoxHead:{
        fontSize:30,
    },

    packageBox:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        margin:5,
        paddingLeft:0,
        marginLeft:0,
        height:70,
    },

    packageSubBox:{
        paddingHorizontal:10,
    },

    packageName:{
        fontSize:20,
    },
    
    packageVersion:{
        fontSize:15,
    },
    
    packageLicense:{
        fontSize:15,
    },
})

export default LibrariesScreen;