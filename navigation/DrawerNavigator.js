import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//navegação Snack
import StackNavigator from "./StackNavigator";

//telas
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} options={{ unmountOnBlur: true }}/>
      <Drawer.Screen name="Perfil" component={Profile} options={{ unmountOnBlur: true }}/>
      <Drawer.Screen name="Logout" component={Logout} options={{ unmountOnBlur: true }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator