import React from "react";
import { View, Text } from "react-native";

const Description=({navigation,route})=>{
    return(
        <View>
            <Text>{route.params.paramKey}</Text>
        </View>
    );
}
export default Description;