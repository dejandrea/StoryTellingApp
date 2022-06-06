import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//telas
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = ()=> {
  return (
      <Tab.Navigator 
        labeled={false}
        barStyle={styles.bottonTabStyle}
        screenOptions={({route})=>({
          tabBarIcon:({focused, color, size})=>{
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? "home" : "home-outline";
            } else if(route.name === "Create Story") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }
            return (
              <Ionicons 
                name={iconName} 
                size={RFValue(25)} 
                color={color} 
                style={styles.icons}
              />
            )
          },
          })}
          activeColor={"#ee8249"}
          inactiveColor={"gray"}
      >
        <Tab.Screen name='Feed' component={Feed} />
        <Tab.Screen name='Create Story' component={CreateStory} />
      </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
  bottonTabStyle:{
    backgroundColor:"#2f345d",
    height:'8%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    overflow:"hidden",
    position:"absolute"

  },
  icons:{
    width:RFValue(30),
    height:RFValue(30),
  }
})

export default BottomTabNavigator