import * as React from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Appearance } from 'react-native';
import {ThemeContext} from '../assets/styles/global';
import { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NetworkScreen from '../screens/NetworkScreen';
import OutputScreen from '../screens/OutputScreen';
import LibrariesScreen from '../screens/LibrariesScreen';
import DeveloperInfoScreen from '../screens/DeveloperInfoScreen';
import DevelopersScreen from '../screens/DevelopersScreen';


const colorScheme =Appearance.getColorScheme();

//Screen names
const homeName = "Home";
const aboutName = "About";
const settingsName = "Settings";
const networkName = "Network";
const outputName = "Output";
const librariesName = "Libraries";

const settingsData = require('../assets/json/SettingsData.json').developers;

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function singleDeveloperStack(themeContext){
  return(settingsData.map((item, index)=>{
    return(<Stack.Screen name="Developers" key={index} component={DeveloperInfoScreen} initialParams={item} options={{
      headerStyle:{
        backgroundColor:themeContext.backSecColor,
        borderBottomColor:themeContext.contrastColor,
        borderBottomWidth:3,
      },
      headerTitleStyle:{
        color:themeContext.contrastColor,
      },
      headerBackImage:()=>{
        return(<Ionicons name={'close'} size={30} color={themeContext.contrastColor} />)
      },
    }}/>);
  }));
};

function multiDeveloperStack(themeContext){
  return(
    <Stack.Screen name="Developers" component={DevelopersScreen} options={{
      headerStyle:{
        backgroundColor:themeContext.backSecColor,
        borderBottomColor:themeContext.contrastColor,
        borderBottomWidth:3,
      },
      headerTitleStyle:{
        color:themeContext.contrastColor,
      },
      headerBackImage:()=>{
        return(<Ionicons name={'close'} size={30} color={themeContext.contrastColor} />)
      },
    }}/>
  );
};

const AboutStack = () => {
  const themeContext = useContext(ThemeContext);
  return(
          <Stack.Navigator initialRouteName='main'
          screenOptions={{
            presentation:'modal',
            // gestureEnabled:true,
            // cardStyle:{
            //   backgroundColor:'transparent',
            // },
          }}
          >
              <Stack.Screen name="AboutMain" component={AboutScreen} options={{
                headerShown:false,
              }}/>
              <Stack.Screen name="Libraries" component={LibrariesScreen} options={{
                headerStyle:{
                  backgroundColor:themeContext.backSecColor,
                  borderBottomColor:themeContext.contrastColor,
                  borderBottomWidth:3,
                },
                headerTitleStyle:{
                  color:themeContext.contrastColor,
                },
                headerBackImage:()=>{
                  return(<Ionicons name={'close'} size={30} color={themeContext.contrastColor} />)
                },
              }}/>

              {
                settingsData.length === 1? singleDeveloperStack(themeContext):multiDeveloperStack(themeContext)
              }
              {settingsData.map((item, index)=>{
                return(<Stack.Screen name={item.devid} key={index} component={DeveloperInfoScreen} initialParams={item} options={{
                  title:item.devname,
                  headerStyle:{
                    backgroundColor:themeContext.backSecColor,
                    borderBottomColor:themeContext.contrastColor,
                    borderBottomWidth:3,
                  },
                  headerTitleStyle:{
                    color:themeContext.contrastColor,
                  },
                  headerBackImage:()=>{
                    return(<Ionicons name={'arrow-back'} size={30} color={themeContext.contrastColor} />)
                  },
                }}/>
            )})}

              {/* <Stack.Screen name="Developers" component={DeveloperInfoScreen} initialParams={{username:'Tushar Jain',}} options={{
                headerStyle:{
                  backgroundColor:themeContext.backSecColor,
                  borderBottomColor:themeContext.contrastColor,
                  borderBottomWidth:3,
                },
                headerTitleStyle:{
                  color:themeContext.contrastColor,
                },
                headerBackImage:()=>{
                  return(<Ionicons name={'close'} size={30} color={themeContext.contrastColor} />)
                },
              }}/> */}
          </Stack.Navigator>
  );
}

const bottomBarData = [
  {name:'Network', component:NetworkScreen, unfocused:'git-network-outline', focused:'git-network', icontype:'ion'},
  {name:'Output', component:OutputScreen, unfocused:'home', focused:'home', icontype:'material'},
  {name:'Home', component:HomeScreen, unfocused:'home-outline', focused:'home', icontype:'ion'},
  {name:'About', component:AboutStack, unfocused:'information-circle-outline', focused:'information-circle', icontype:'ion'},
  {name:'Settings', component:SettingsScreen, unfocused:'settings-outline', focused:'settings', icontype:'ion'},
  // {name:'Libraries', component:LibrariesScreen, unfocused:'home-outline', focused:'home', icontype:'ion'},
];

const MainContainer = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        backBehavior='initialRoute'
        screenOptions={({ route }) => ({
          headerShown: false,
          swipeEnabled: true,
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: themeContext.backSecColor,
            borderTopColor: themeContext.contrastColor,
            borderTopWidth: 3,
            paddingBottom:5,
            paddingTop:5,
            height: 60,
          },
        })}>

        {bottomBarData.map((item, index)=>{
          return(<Tab.Screen name={item.name} component={item.component} key={index}
          options={ ({route})=>({
            tabBarLabel:item.name,
            tabBarIcon:({focused, color, size}) =>{
              if (item.icontype === 'ion'){
                return(<Ionicons name={
                  focused ? item.focused : item.unfocused
                } size={24} color={color} />);
              } else if (item.icontype === 'material'){
                return(
                  <MaterialIcons name={
                    focused ? item.focused : item.unfocused
                  } size={24} color={color} />
                );
              }
            },
            tabBarHideOnKeyboard:true,
            tabBarActiveTintColor: themeContext.contrastColor,
          })}
          />);
        })}

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getTabBarVisibility = (route) => {
  let currentRoute = getFocusedRouteNameFromRoute(route);
  if ((currentRoute === 'Libraries') || (currentRoute === 'Developers')){
    return 'none';
  } else {
    for (i=0; i<settingsData.length; i++){
      if (currentRoute === settingsData[i].devid){
        return 'none';
      }
    }
    return 'flex';
  }
}

export default MainContainer;