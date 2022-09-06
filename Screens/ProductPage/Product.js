import React, {useState} from "react";
import {View,Text, Pressable, Image} from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import style from "./style(P)";



function Product({navigation}){

const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return(
        <View style={style.mainView}>
            <View>
                <Image 
                    source={{uri:'https://images.unsplash.com/photo-1615522894493-2f3e3fda615c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyZmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'}}
                    resizeMode="contain"
                    style={{width:174, height:192, borderRadius:10}}
                />
            </View>
            <View>

            </View>
                <View style={{flexDirection:"row"}}>
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
                    <View>
                        <Text>Add to Cart</Text>
                    </View>
                </Pressable>

            <View>

            </View>
        </View>
    )
}

export default Product;