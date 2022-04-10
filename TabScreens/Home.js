import React, { useCallback, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DATA = [
    {
        photo: require('../assets/cheeseburger.webp'),
        title: 'Cheeseburger',
        description: 'I like a cheeseburger too much please give me one more I love it so much , Every weekend i always have to eat burger cheese burger is my fav dish .',
        prices: 'Rs 350',
    },
    {
        photo: require('../assets/pizza.webp'),
        title: 'Pizza',
        description: 'I like a cheeseburger too much please give me one more I love it so much , Every weekend i always have to eat burger cheese burger is my fav dish .',
        prices: 'Rs 850',
    },
    {
        photo: require('../assets/noddle.webp'),
        title: 'Noodles',
        description: 'I like a cheeseburger too much please give me one more I love it so much , Every weekend i always have to eat burger cheese burger is my fav dish .',
        prices: 'Rs 250',
    },
    {
        photo: require('../assets/milkshake.webp'),
        title: 'Milkshake',
        description: 'I like a cheeseburger too much please give me one more I love it so much , Every weekend i always have to eat burger cheese burger is my fav dish .',
        prices: 'Rs 150',
    },
    {
        photo: require('../assets/sandwich.webp'),
        title: 'Sandwich',
        description: 'I like a cheeseburger too much please give me one more I love it so much , Every weekend i always have to eat burger cheese burger is my fav dish .',
        prices: 'Rs 150',
    }
];

const Home = ({navigation}) => {
    const navigatetoburger=()=>{
navigation.navigate('Description',{  paramKey: 'Some Param from previous Screen'
    })
}
    const [name,setname]=useState('')


    // const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    // const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
    // const toggleNumberOfLines = () => { //To toggle the show text or hide it
    //     setTextShown(!textShown);
    // }
    
    // const onTextLayout = useCallback(e =>{
    //     setLengthMore(e.nativeEvent.lines.length >=2); //to check the text is more than 4 lines or not
    //     // console.log(e.nativeEvent);
    // },[]);

    return (
        <View style={styles.Maincontainer}>
         
              
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={()=>navigatetoburger()}>
                                <View  style={styles.MainView}>
                                <View style={{flexDirection:'row'}}>
                                    <Image style={styles.image} source={item.photo}></Image>
                                  <View style={styles.View1}>
                                        <Text  value={name} style={styles.titletext}>{item.title}</Text>
                                        <Text numberOfLines={2} style={styles.titletext2}>{item.description}</Text>
                                        {/* <Text
                  onTextLayout={onTextLayout}
                  numberOfLines={textShown ? undefined : 2}
                  style={{ lineHeight: 21 }}>{item.description}</Text>
    
                  {
                      lengthMore ? <Text
                      onPress={toggleNumberOfLines}
                      style={{ lineHeight:13 , marginTop: 2 }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                      :null
                  } */}
                                </View >
                                </View>
                                <View style={styles.View2}>
                                    <View style={styles.View3}>
<Text style={styles.text}>{item.prices}</Text>
</View>
<TouchableOpacity style={styles.touchopacity}>
    <Text style={styles.touchopacitytext}>BUY</Text>
</TouchableOpacity>
</View>
                                </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            
            </View>

      
    );

}
export default Home;

const styles = StyleSheet.create({
    Maincontainer: {
        width:wp('100%'),
        height:hp('90%'),
        // flex:1,
        backgoundColor: '#ffffff'
    },
    MainView: {
        width: wp('90%'),
        height: hp('20%'),
        backgroundColor: '#faf9f9',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: hp(2)
    },
    titletext:{
        fontWeight:'bold',
        marginTop:hp(2),
        fontSize:20,
        color:'black'
},
    titletext2:{
      
        marginTop:hp(1),
        fontSize:15

    },
    image:{width:wp(20),height:hp(10),marginTop:hp(2)},
    View1:{flexDirection:'column',width:wp('50%')},
    View2:{flexDirection:'row',justifyContent:'space-around'},
    View3:{marginTop:hp(1),width:'30%',borderRadius:8,borderWidth:2,height:hp(5),backgroundColor:'black',borderColor:'black'},
text:{fontSize:20,fontWeight:'bold',color:'white',textAlign:'center',marginTop:hp(0.5)},
touchopacity:{width:'30%',borderRadius:8,borderWidth:2,marginTop:8,height:hp(5),backgroundColor:'#db355b',borderColor:'#db355b'},
touchopacitytext:{fontSize:20,fontWeight:'bold',color:'white',textAlign:'center',marginTop:hp(0.5)}
})


