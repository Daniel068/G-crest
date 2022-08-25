import React from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, TextInput, Pressable,  } from 'react-native';
import style from './style(L)';

function Login ({navigation}){
    return(
        <ScrollView >
            <KeyboardAvoidingView style={style.mainView} >

                <View style={style.heroTile}>
                        <Text style={style.text}>
                            Please enter your details to login
                        </Text>

                        <View>

                            <TextInput style={style.placeholder} placeholder='Enter your email' />
                            
                            <TextInput style={style.placeholder} placeholder='Enter password' />
                            
                        </View>

                        <View>
                            <Pressable style={style.button}>
                                <Text style={style.Btntext} > Login </Text>
                            </Pressable>
                        </View>

                        <View style= {{flexDirection:"row"}}>
                            <Text>
                                Don't have an account? 
                            </Text>
                            <Pressable onPress={()=> navigation.navigate("Signup")}> 
                                <Text style= {{fontWeight:"bold"}}>Sign Up </Text> 
                            </Pressable>
                            
                        </View>
                    </View>

            </KeyboardAvoidingView>
        </ScrollView>


)};

export default Login;