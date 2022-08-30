import React from "react";
import {Text, ScrollView, KeyboardAvoidingView, View, TextInput,Pressable, ImageBackground } from 'react-native'
import  Icon  from "react-native-vector-icons/Ionicons";
import style from "./style(C)";

const Smoothies = ('https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21vb3RoaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
const fruitParfait = require ('https://images.unsplash.com/photo-1490371475955-4cb3bfc72f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0JTIwcGFyZmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')
const milkShakes = require ('https://images.unsplash.com/photo-1619158401201-8fa932695178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsayUyMHNoYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')
const gingerShot = require ('https://images.unsplash.com/photo-1582644977442-f931568619dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2luZ2VyJTIwc2hvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')
const zobeDrink = require ('https://images.unsplash.com/photo-1566823422707-7813dab8eca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
const fruitSalad = require ('https://images.unsplash.com/photo-1563208276-13fee6108415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')


function Category({navigation}) {
    return(
        <ScrollView>
            <KeyboardAvoidingView>

                <Pressable onPress={() => navigation.goBack("")} >
                    <View>
                         <Icon name='arrow-back-sharp' color={"black"} size={30} />
                    </View>                   
                </Pressable>

                <View>
                    <TextInput placeholder="Search Product" />
                </View>

                <View style={{flexDirection:"column"}}>
                    <View style ={style.CategoryView}>
                        <ImageBackground 
                        style={style.Producttile1}
                        resizeMode="cover"
                        source={{uri: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21vb3RoaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView} >
                                <Text>Smoothies</Text>
                            </View>

                        </ImageBackground>
                        <ImageBackground 
                         style={style.Producttile2}
                         resizeMode="cover"
                        source={{uri: 'https://images.unsplash.com/photo-1490371475955-4cb3bfc72f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0JTIwcGFyZmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView} >
                                <Text>Fruit Parfait</Text>
                            </View>

                        </ImageBackground>

                    </View>

                    <View style ={style.CategoryView}>
                        <ImageBackground 
                        style={style.Producttile1}
                        resizeMode="cover"
                        source={{uri:'https://images.unsplash.com/photo-1619158401201-8fa932695178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsayUyMHNoYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView}>
                                <Text>Milk Shakes</Text>
                            </View>

                        </ImageBackground>
                        <ImageBackground 
                        style={style.Producttile2}
                        resizeMode="cover"
                        source={{uri:'https://images.unsplash.com/photo-1582644977442-f931568619dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2luZ2VyJTIwc2hvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView}>
                                <Text>Ginger Shot</Text>
                            </View>

                        </ImageBackground>

                    </View>

                    <View style ={style.CategoryView}>
                        <ImageBackground 
                        style={style.Producttile1}
                        resizeMode="cover"
                        source={{uri:'https://images.unsplash.com/photo-1566823422707-7813dab8eca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView}>
                                <Text>Zobo Drink</Text>
                            </View>

                        </ImageBackground>
                        <ImageBackground 
                        style={style.Producttile2}
                        resizeMode="cover"
                        source={{uri:'https://images.unsplash.com/photo-1563208276-13fee6108415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView}>
                                <Text>Fruit Salad</Text>
                            </View>

                        </ImageBackground>

                    </View>
                </View>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Category