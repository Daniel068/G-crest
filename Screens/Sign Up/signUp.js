import React from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, TextInput, Pressable, StyleSheet  } from 'react-native';
import style from './style(S)';

function Signup ({navigation}){
    return(
        <ScrollView >
            <KeyboardAvoidingView style={style.mainView} >

                <View style={style.heroTile} >
                        <Text style={style.text}>
                            Please register an account
                        </Text>

                        <View>

                            <TextInput style={style.placeholder} placeholder='Enter full name' />
                            
                            <TextInput style={style.placeholder} placeholder='Enter your email' />

                            <TextInput style={style.placeholder} placeholder='Enter Password' />
                            
                            <TextInput style={style.placeholder} placeholder='Confirm Password' />
                            
                        </View>

                        <View>
                            <Pressable onPress={()=> navigation.navigate('HomeScreen')} style={style.button}>
                                <Text style={style.Btntext} > Sign Up </Text>
                            </Pressable>
                        </View>

                        <View style= {{flexDirection:"row"}}>
                            <Text>
                                Already have an account? 
                            </Text>
                            <Pressable onPress={()=> navigation.navigate("Login")}> 
                                <Text style= {{fontWeight:"bold"}}> Login </Text> 
                            </Pressable>
                            
                        </View>
                    </View>

            </KeyboardAvoidingView>
        </ScrollView>


)};

export default Signup;