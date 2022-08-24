import React from 'react';
import { ScrollView, KeyboadAvoidingView, View, Text, TextInput, Pressable,  } from 'react-native';


const Login = () => {
    return(
        <ScrollView>
            <KeyboadAvoidingView>

                <View>
                    <Text>
                        Please enter your details to login
                    </Text>

                    <View>

                        <TextInput placeholder='Enter your email' />
                        
                        <TextInput placeholder='Enter password' />
                        
                    </View>

                    <View>
                        <Pressable>
                            <Text> Login </Text>
                        </Pressable>
                    </View>

                    <Text>
                        Don't have an account? Sign Up
                    </Text>
                </View>

            </KeyboadAvoidingView>
        </ScrollView>


)}

export default Login;