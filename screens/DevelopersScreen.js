import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, FlatList, ScrollView } from 'react-native';
import {ThemeContext} from '../assets/styles/global';
import { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function DevelopersScreen({ navigation }) {
    const themeContext = useContext(ThemeContext);
    const globalStyles = themeContext.globalStyles;

    const settingsData = require('../assets/json/SettingsData.json');
    const developersData = settingsData.developers;

    const Item = ({ item }) => (
        <Pressable style={styles.packageBox} onPress={()=>{navigation.navigate(item.devid)}}>
            <View style={styles.packageSubBox}>
            <Ionicons name={'person-sharp'} size={30} style={globalStyles.regularText} />
            </View>
            <View style={styles.packageSubBox}>
                <Text style={[styles.packageName, globalStyles.regularText]}>{item.devname}</Text>
                <Text style={[styles.packageVersion, globalStyles.regularSubText]}>{item.workdone}</Text>
                
            </View>
        </Pressable>
    );
    return (
        <ScrollView style={globalStyles.container}>
        <View>
            <View style={[styles.libraryBox,]}>
                {developersData.map((item, index) => {
                    return(<Item item={item} key={item.devid} />);
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

export default DevelopersScreen;