import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import CustomTextinput from "./CustomTextinput";
import styles from "./StyleSheet";
import CustomButton from "./CustomButton";

const SignUp = ({navigation}) => {
    const navigationtotab=()=>{
        navigation.navigate('Tab')
    }
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.LoginMainView}>
            <View>
                <View style={styles.LoginTextView}>
                    <Text style={styles.LoginText}>SIGN UP</Text>
                </View>
                <CustomTextinput name='Email' ></CustomTextinput>
                <CustomTextinput name='Password' ></CustomTextinput>
                <View style={styles.Checkbox}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <TouchableOpacity>
                        <Text style={styles.Remember}>Remember me?</Text>
                    </TouchableOpacity>
                </View>
                <CustomButton onButtonClick={()=>navigationtotab()}  name='SIGN UP '></CustomButton>
        
                <View style={styles.ImageView}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Image style={{ height: hp(10), width: wp(15) }} source={require('../assets/google.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ height: hp(8), width: wp(15), marginLeft: 10 }} source={require('../assets/facebook.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ height: hp(8), width: wp(15), marginLeft: 10 }} source={require('../assets/linkedin.png')}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.AccountView}>
                    <Text style={{ marginTop: hp(.8), fontSize: 15 }}>Already a user?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signup}>LOGIN</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );
}
export default SignUp;