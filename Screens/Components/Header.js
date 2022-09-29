import { View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import style from './HeaderStyle';

export default function Header(props) {
  const {countCartItems} = props;
  return (
    <View style={style.MainView} >
      <View>
        <Text style={style.Text} >Products</Text>
      </View>
      
      <View style={style.cartView}>
        
          <Text> Cart </Text>
          
          <View style={style.cartItemView}>
            <Text>
            {''} 
           {props.countCartItems ? (
            <Pressable>
              <Text>
              {countCartItems}
              </Text>
            </Pressable>) : ('')}
            </Text>
          </View>
           
      </View>
    </View>
  )
} 