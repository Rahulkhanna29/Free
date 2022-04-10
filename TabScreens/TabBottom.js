import React from "react";
import { View,Text,Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from "./Setting";
import Home from "./Home";
import Wallet from "./Wallet";
import Profile from "./Profile";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';





const Tab =createBottomTabNavigator();
const TabBottom=()=>{
    return(
//    <Tab.Navigator barStyle ={{backgroundColor: 'blue'}}
//    labeled={false}
//    screenOptions={{
//     activeTintColor: '#db355b',
//     inactiveTintColor: '#d9d9d9',
//     style: {
//       elevation: 0,
//       height:300
//     },
//   }}
//   >
   
<Tab.Navigator
screenOptions={{
  headerShown: false,
  labeled:false,
  tabBarActiveTintColor:'red',
  tabBarInactiveTintColor:'black',
 tabBarLabel:() => {return null},
  tabBarStyle: {
    height: 60,
//     activeTintColor: 'red',
//    inactiveTintColor: 'yellow',
    paddingHorizontal: 5,
    paddingTop: 0,
    backgroundColor: 'white',
    position: 'absolute',
    borderTopWidth: 0,
},
}}
>
   
       <Tab.Screen name="Home" component={Home}  options={{
tabBarIcon:({color})=>(
<FontAwesome5 name="home" color={color} size={30}/>
),
//   tabBarOptions: {
//       activeTintColor: '#cd077d',

//   }

headerShown:false


       }} ></Tab.Screen>



       <Tab.Screen name="Wallet" component={Wallet} options={{
tabBarIcon:({color})=>(
    <View>
        {/* <Image resizeMode='contain'
        style={{width:25,height:25}}
        source={require('../assets/Wallet.png')}></Image> */}
        <FontAwesome5 name="wallet" color={color} size={30} />
    </View>
),headerShown:false


       }}></Tab.Screen>
       <Tab.Screen name="Profile" component={Profile} options={{
tabBarIcon:({color})=>(
    <View>
        {/* <Image resizeMode='contain'
        style={{width:25,height:25}}
        source={require('../assets/Profile.png')}></Image> */}
        <FontAwesome5 name="user-alt" color={color} size={30} />
    </View>
),headerShown:false


       }}></Tab.Screen>
       <Tab.Screen name="Setting" component={Setting} options={{
tabBarIcon:({color})=>(
    <View>
        {/* <Image resizeMode='contain'
        style={{width:25,height:25}}
        source={require('../assets/Setting.png')}></Image> */}
        <Feather name="settings" color={color} size={30} />
    </View>
),headerShown:false


       }}></Tab.Screen>
   </Tab.Navigator>
    );
}
export default TabBottom;


// function Home(){
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
// }

// function Setting() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
  
//   function Profile() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
//   function Wallet() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }

//   const Tab = createBottomTabNavigator();
  
//   export default function TabBottom() {
//     return (
    
//         
//         <Tab.Navigator>
//         <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
//           <Tab.Screen name="Wallet" component={Wallet}  options={{headerShown:false}}/>
//         </Tab.Navigator>
  
//     );
//   }