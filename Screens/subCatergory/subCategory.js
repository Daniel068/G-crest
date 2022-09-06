import React from "react";
import {Text, ScrollView, KeyboardAvoidingView, View, TextInput,Pressable, ImageBackground, Image } from 'react-native'
import  Icon  from "react-native-vector-icons/Ionicons";
import style from "./style(SC)";


function SubCategory({navigation}) {
    return(
       
            <KeyboardAvoidingView style={style.mainView}>

                <View style={{flexDirection:"row"}}>
                    <View style={style.iconView} >
                        <Pressable  onPress={() => navigation.goBack("")} >
                            <Icon name='arrow-back-sharp' color={"black"} size={30} />
                        </Pressable>                   
                    </View>
                    <View style={style.CategoryTextView}>
                        <Text style={{fontWeight:"400", fontSize:24, lineHeight:32.4}}> Fruit Parfait</Text>
                    </View>
                </View>

                 <ScrollView>

                   
                <Pressable>
                    <View style={style.searchContainer}>
                        <Icon style={style.searchIcon} name='md-search-outline' color={"black"} size={30} />
                        <TextInput placeholder="Search Product" style={style.placeholder} />
                        <Icon style={style.searchIcon} name='ios-mic' color={"black"} size={30} />
                    </View>
                </Pressable>

                    <View style={{flexDirection:"column"}}>
                        
                        <View style={style.Producttile1}>
                            <Pressable onPress={()=>navigation.navigate('Product')}>
                                <View>                                
                                    <Image 
                                        source={{uri:'https://images.unsplash.com/photo-1615522894493-2f3e3fda615c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyZmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'}}
                                        resizeMode="contain"
                                        style={{width:85, height:115, borderRadius:10}}
                                        
                                    />
                                </View>
                            </Pressable>
                            <View>
                                <Text style={{marginBottom:10, fontWeight:"400"}}>Banana & Strawberry Mix</Text>
                                <Text style={{marginLeft:60, fontWeight:"400"}}>$15</Text>
                                <Pressable>
                                    <View style={style.Addtocart}>
                                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:27}}>Add to Cart</Text>
                                    </View>
                                </Pressable>
                            </View>                          
                        </View>

                        <View style={style.Producttile1}>
                            
                            <Image 
                                source={{uri:'https://images.unsplash.com/photo-1552842016-443bcee0667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFyZmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'}}
                                resizeMode="contain"
                                style={{width:85, height:115, borderRadius:10}}
                            />

                        <View>
                            <Text style={{marginBottom:10, fontWeight:"400"}}>Cherry & Strawberry Mix</Text>
                            <Text style={{marginLeft:59, fontWeight:"400"}}>$20</Text>
                            <Pressable>
                                <View style={style.Addtocart}>
                                    <Text style={{fontSize:15, fontWeight:"600", lineHeight:27}}>Add to Cart</Text>
                                </View>
                            </Pressable>
                        </View>                          
                    </View>

                    <View style={style.Producttile1}>
                            
                            <Image 
                                source={{uri:'https://images.unsplash.com/photo-1600648832373-6f5e75b71ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyZmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'}}
                                resizeMode="contain"
                                style={{width:85, height:115, borderRadius:10}}
                            />

                        <View>
                            <Text style={{marginBottom:10, fontWeight:"400"}}>Banana & Strawberry Mix</Text>
                            <Text style={{marginLeft:60, fontWeight:"400"}}>$30</Text>
                            <Pressable>
                                <View style={style.Addtocart}>
                                    <Text style={{fontSize:15, fontWeight:"600", lineHeight:27}}>Add to Cart</Text>
                                </View>
                            </Pressable>
                        </View>                          
                    </View>

                    </View>


                       
                </ScrollView>
            </KeyboardAvoidingView>
    
    )
}

export default SubCategory