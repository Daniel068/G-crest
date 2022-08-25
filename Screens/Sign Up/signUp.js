import React from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, TextInput, Pressable,  } from 'react-native';


function Signup ({navigation}){
    return(
        <ScrollView >
            <KeyboardAvoidingView  >

                <View >
                        <Text >
                            Please register an account
                        </Text>

                        <View>

                            <TextInput placeholder='Enter full name' />
                            
                            <TextInput placeholder='Enter your email' />

                            <TextInput placeholder='Enter Password' />
                            
                            <TextInput placeholder='Confirm Password' />
                            
                        </View>

                        <View>
                            <Pressable >
                                <Text> Sign Up </Text>
                            </Pressable>
                        </View>

                        <Text>
                            Already have an account? Login
                        </Text>
                    </View>

            </KeyboardAvoidingView>
        </ScrollView>


)};

export default Signup;