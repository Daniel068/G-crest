import React from 'react';
import {View, KeyboardAvoidingView, Text, Pressable, ScrollView, StyleSheet } from 'react-native'
import style from './style(O)';
import Icon from "react-native-vector-icons/Ionicons";
import Login from '../Login/Login';



function OnboardingScreen ({navigation}) {
    function gotoLogin (){
        navigation.navigate('Login');
    }
    return(
        <KeyboardAvoidingView style = {style.mainView}>

            <View style = {style.heroTile}>

                <Text style = {style.text}>
                    Healthy <Text style ={{color:"#6EC756"}}>food</Text> and <Text style ={{color:"#6EC756"}}>drinks</Text> at your finger tips
                </Text>
                
                <Pressable onPress={gotoLogin} style = {style.button}>
                    <Icon name='ios-chevron-forward' color={"black"} size={30} />
                </Pressable>

            </View>

        </KeyboardAvoidingView>

)};


export default OnboardingScreen;