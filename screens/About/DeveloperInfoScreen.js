import * as React from 'react';
import { View, Text, StyleSheet, Linking, Pressable, Image } from 'react-native';
import {ThemeContext} from '../assets/styles/global';
import { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Link } from '@react-navigation/native';

function DeveloperInfoScreen({ route, navigation }) {
  const themeContext = useContext(ThemeContext);
  const globalStyles = themeContext.globalStyles;
  return (
    <View style={globalStyles.container}>
			<View style={styles.infoBox}>
				<Image style={styles.devImage} source={{uri:route.params?.imageurl.split("file/d/").join("uc?export=view&id=").split("/view")[0]}}></Image>
				<Text style={[globalStyles.regularText, { fontSize: 35, fontWeight: 'bold' }]} onPress={() => navigation.navigate('Home')}>
					{route.params?.devname}
				</Text>

				<Text style={[globalStyles.regularSubText, {fontSize:20}]}>{route.params?.workdone}</Text>

			</View>
      
			<Pressable style={styles.linkButton} onPress={()=>{Linking.openURL(route.params?.email);}}>
            <View style={styles.linkSubButton}>
            <MaterialIcons name={'email'} size={30} style={globalStyles.regularText} />
            </View>
            <View style={styles.linkSubText}>
                <Text style={[styles.packageName, globalStyles.regularText]}>{route.params?.emailplaceholder}</Text>
            </View>
        </Pressable>

				<Pressable style={styles.linkButton} onPress={()=>{Linking.openURL(route.params?.secondaryemail);}}>
            <View style={styles.linkSubButton}>
            <MaterialIcons name={'email'} size={30} style={globalStyles.regularText} />
            </View>
            <View style={styles.linkSubText}>
                <Text style={[styles.packageName, globalStyles.regularText]}>{route.params?.secondaryemailplaceholder}</Text>
            </View>
        </Pressable>

				<Pressable style={styles.linkButton} onPress={()=>{Linking.openURL(route.params?.linkedin);}}>
            <View style={styles.linkSubButton}>
            <Ionicons name={'logo-linkedin'} size={30} style={globalStyles.regularText} />
            </View>
            <View style={styles.linkSubText}>
                <Text style={[styles.packageName, globalStyles.regularText]}>{route.params?.linkedinplaceholder}</Text>
            </View>
        </Pressable>

				<Pressable style={styles.linkButton} onPress={()=>{Linking.openURL(route.params?.github);}}>
            <View style={styles.linkSubButton}>
            <Ionicons name={'logo-github'} size={30} style={globalStyles.regularText} />
            </View>
            <View style={styles.linkSubText}>
                <Text style={[styles.packageName, globalStyles.regularText]}>{route.params?.githubplaceholder}</Text>
            </View>
        </Pressable>

				<Pressable style={styles.linkButton} onPress={()=>{Linking.openURL(route.params?.instagram);}}>
            <View style={styles.linkSubButton}>
            <Ionicons name={'logo-instagram'} size={30} style={globalStyles.regularText} />
            </View>
            <View style={styles.linkSubText}>
                <Text style={[styles.packageName, globalStyles.regularText]}>{route.params?.instagramplaceholder}</Text>
            </View>
        </Pressable>

				<Pressable style={styles.linkButton} onPress={()=>{Linking.openURL(route.params?.facebook);}}>
            <View style={styles.linkSubButton}>
            <Ionicons name={'logo-facebook'} size={30} style={globalStyles.regularText} />
            </View>
            <View style={styles.linkSubText}>
                <Text style={[styles.packageName, globalStyles.regularText]}>{route.params?.facebookplaceholder}</Text>
            </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
	infoBox:{
		margin:10,
		padding:10,
		alignItems:'center',
		justifyContent:'center',
	},

	devImage:{
		width:150,
		height:150,
		borderRadius:75,
		resizeMode:'contain',
		overflow:'hidden',
	},

	linkButton:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
        margin:5,
        paddingLeft:0,
        marginLeft:0,
        height:60,
	},

	linkSubButton:{
			paddingHorizontal:15,
			paddingRight:5,
	},

	linkSubText:{
		paddingHorizontal:15,
		paddingLeft:5,
},

	packageName:{
			fontSize:20,
	},
})

export default DeveloperInfoScreen;