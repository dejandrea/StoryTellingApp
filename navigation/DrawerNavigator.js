import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//navegação tab
import TabNavigator from './TabNavigator'

//navegação Snack
import StackNavigator from "./StackNavigator";

//telas
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator}/>
      <Drawer.Screen name="Perfil" component={Profile}/>
      <Drawer.Screen name="Logout" component={Logout}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator