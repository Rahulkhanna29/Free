import React, { useEffect } from "react";
import { View,Image,Text } from "react-native";
import styles from "./StyleSheet";
 const SplashScreen=({navigation})=>{
  useEffect(()=>{
      setTimeout(()=>{
          navigation.navigate('Login')
      },3000);
  },[])

     return(
         <View style={styles.Splash}>
         <View style={{alignItems: 'center'}}>
        <Image source={require('../assets/Splashimages.jpg')}></Image>
             </View> 
         </View>
     );
    
 }
 export default SplashScreen;
