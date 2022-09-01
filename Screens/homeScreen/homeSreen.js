import React from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView, ImageBackground, StatusBar,Image} from "react-native";
import style from './style(H)';
import { BackgroundCarousel } from './BackgroundCarousel';


const images = [
    "https://media.istockphoto.com/photos/smoothies-from-frozen-black-currant-red-currant-and-gooseberry-with-picture-id468330924?k=20&m=468330924&s=612x612&w=0&h=EFpb9hA2zSQm-OYuRAqFE8SgNDMKN6QII28HhYTf7hY=", 
    "https://cdn.pixabay.com/photo/2018/05/07/11/22/mango-3380631_960_720.jpg",
    "https://media.istockphoto.com/photos/healthy-appetizing-red-smoothie-dessert-in-glasses-picture-id1081369140?k=20&m=1081369140&s=612x612&w=0&h=A0yGDUHEXlO-JLEG9Gp1jSXU5Rw3j0KY2KGszxxyKR0=",
    "https://cdn.pixabay.com/photo/2018/02/23/19/23/smoothies-3176371_960_720.jpg"
  ];



export default function HomeScreen ({Navigation}) {
   
    return(
        <KeyboardAvoidingView style={style.mainView} >
            <ScrollView>
            

                <View style={{flex:.55, marginBottom:10,}}>
                    <BackgroundCarousel images={images} />
                </View>

                <View style={{justifyContent:"center", alignSelf:"flex-start", marginLeft:22}}><Text>Category</Text></View>
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

                <View style={{justifyContent:"center", alignSelf:"flex-start", marginLeft:22}}><Text>Reviews</Text></View>

                <View style={style.reviewtile} >

                </View>          
            </ScrollView>
        </KeyboardAvoidingView>
    )
};
