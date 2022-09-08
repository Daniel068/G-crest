import React, {useState} from "react";
import {View,Text, Pressable, Image} from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import style from "./style(P)";
import Icon from 'react-native-vector-icons/Ionicons';



function Product({navigation}){

const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return(
        <View style={{backgroundColor:"rgba(217,217,217, 1)",flex:1}} >
            <View style={style.mainView}>
                <View>
                    <Image 
                    
                    />
                </View>
                <View>
                    <Image 
                        source={{uri:'https://images.unsplash.com/photo-1615522894493-2f3e3fda615c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyZmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'}}
                        resizeMode="contain"
                        style={{width:174, height:192, borderRadius:10}}
                    />
                </View>
                <View style={style.imageTextView}>
                    <Text style={{fontSize:15, fontWeight:"400"}}>Banana & Strawberry Mix</Text>
                    <View style={style.lineView}></View>
                    <Text style={{fontSize:15, fontWeight:"400"}}>$15</Text>
                </View>
                
                    <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:25,}}>
                        
                        <Checkbox 
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={style.Checkbox}
                        />
                        <Text>500mL</Text>

                        <Checkbox 
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={style.Checkbox}
                        />
                        <Text>1L</Text>

                        <Checkbox 
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={style.Checkbox}
                        />
                        <Text>2L</Text>
                    </View>

                    <Pressable>
                        <View style={style.Addtocart}>
                            <Text style={{fontSize:15, fontWeight:"600", lineHeight:27}}>Add to Cart</Text>
                        </View>
                    </Pressable>
                </View>

            <Pressable onPress={()=>navigation.goBack('')}>
                <View style={style.closeiconView}>
                    <Icon name='md-close-outline' color={"black"} size={30} />
                </View>
            </Pressable>
        </View>
    )
}

export default Product;