import * as React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import {ThemeContext} from '../../assets/styles/global';
import { useContext } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

function AboutScreen({ navigation }) {
    const themeContext = useContext(ThemeContext);
    const globalStyles = themeContext.globalStyles;
    const sourceUrl = require('../../assets/json/AboutData.json').sourceCode;
    return (
        <View style={globalStyles.container}>
            <View style={styles.headerBox}>
                <Image source={require("../assets/images/logo.png")} style={styles.logo}/>
                <Text style={[styles.appName, globalStyles.contrastText]}>DRAN</Text>
                <Text style={[styles.appDesc, globalStyles.regularText]}>DRAN is a project to create a self-driving car simulated in GTA5.</Text>
            </View>
            <View>
                <View style={[styles.detailsBox, globalStyles.contrastBox]}>
                    <Text style={[styles.appVersion, globalStyles.contrastText]}>v0.0.1</Text>
                    <Text style={[styles.updateDate, globalStyles.regularText]}>10-09-2022</Text>
                </View>

                <Pressable style={styles.buttonContainer} onPress={()=>{Linking.openURL(sourceUrl);}}>
                    <View style={styles.buttonIconContainer}>
                        <Ionicons name={'code-slash'} size={30} style={[globalStyles.regularText]} />
                    </View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={[styles.buttonText, globalStyles.regularText]}>Source Code</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.buttonContainer} onPress={()=>{navigation.navigate('Libraries')}}>
                    <View style={styles.buttonIconContainer}>
                        <Octicons name={'package-dependencies'} size={31} style={[globalStyles.regularText]} />
                    </View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={[styles.buttonText, globalStyles.regularText]}>Libraries</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.buttonContainer} onPress={()=>{navigation.navigate('Developers')}}>
                    <View style={styles.buttonIconContainer}>
                        <MaterialIcons name={'groups'} size={30} style={[globalStyles.regularText]} />
                    </View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={[styles.buttonText, globalStyles.regularText]}>Developers</Text>
                    </View>
                </Pressable>
                <View style={[styles.detailsBox, globalStyles.contrastBox]}>    
                    <Text style={[styles.updateDate, globalStyles.regularText]}>GNU General Public Use License v2.0</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBox:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    logo:{
        marginTop:50,
        marginBottom:10,
        width:100,
        height:100,
    },

    appName:{
        fontSize:30,
    },

    appDesc:{
        fontSize:20,
        textAlign:"center",
        paddingHorizontal:10,
        paddingTop:10,
    },

    detailsBox:{
        flexDirection: 'row',
        padding:10,
        margin:10,
    },

    appVersion:{
        fontSize:20,
        marginLeft:10,
        marginRight:40,
    },

    updateDate:{
        fontSize:20,
    },

    aboutButton:{
        margin:10,
        textAlign:"left",
    },

    buttonContainer:{
        flexDirection:'row',
        padding:5,
        margin:5,
        height:50,
        alignItems:'center',
    },

    buttonIconContainer:{
        padding:5,
        paddingLeft:10,
    },

    buttonTextContainer:{
        padding:5,
    },

    buttonText:{
        fontSize:20,
    },
});

export default AboutScreen;