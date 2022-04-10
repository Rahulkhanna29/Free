import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./Components/SplashScreen";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from "react";
import TabBottom from "./TabScreens/TabBottom";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./TabScreens/Home";
import Setting from "./TabScreens/Setting";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Description from "./Components/Description";

const Stack=createStackNavigator();
const Tab = createBottomTabNavigator();

function App(){
  return(
    // <GestureHandlerRootView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Tab" component={TabBottom} options={{headerShown:false}}></Stack.Screen>
        {/* <Stack.Screen name="Description" component={Description} options={{headerShown:false}}></Stack.Screen> */}
      </Stack.Navigator>
     {/* <TabBottom /> */}
    </NavigationContainer>
    // </GestureHandlerRootView>
  );
}
export default App;