import React from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView} from "react-native";
import style from './style(H)';



export default function HomeScreen () {
    return(
        <ScrollView>
            <KeyboardAvoidingView style={style.mainView} >
           
            <View style={style.CategoryView} >

                <View style={style.Producttile}></View>
                <View style={style.Producttile}></View>
               
            </View>

            <View></View>

            </KeyboardAvoidingView>
        </ScrollView>
    )
};
