import React from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView, ImageBackground, StatusBar,Image} from "react-native";
import style from './style(H)';




export default function HomeScreen () {
   
    return(
       
            <KeyboardAvoidingView style={style.mainView} >

                <Text>Category</Text>
                <View style ={style.CategoryView}>
                    <ImageBackground 
                    style={style.Producttile1}
                    resizeMode="cover"
                    source={require('../homeScreen/Smoothies.jpg')} >
                        <View style={style.backgroundView}>
                            <Text>Smoothies</Text>
                        </View>

                    </ImageBackground>
                    <ImageBackground 
                    style={style.Producttile2}
                    source={require('../homeScreen/Smoothies.jpg')} >
                        <View style={style.backgroundView}>
                            <Text>Smoothies</Text>
                        </View>

                    </ImageBackground>

                </View>

                <Text>Reviews</Text>

                <View style={style.reviewtile} >

                </View>

            </KeyboardAvoidingView>
        
    )
};
