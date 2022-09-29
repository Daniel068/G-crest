import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'

export default function Basket(props) {
  const {cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <ScrollView style={{flexDirection:'column',backgroundColor:'pink',marginLeft:5,}}>
        <View style={{}}>
          <Text>Cart Items</Text> 
        </View>
        <View>
          {cartItems.length === 0 && <View><Text>Cart is Empty</Text></View>}
        
         {cartItems.map((item)=>(
          <View key={item.id} style={{flexDirection:'row'}}>
            <View><Text>{item.name}</Text></View>
            <View style={{flexDirection:'row'}}>
              <Pressable onPress={()=>onAdd(item)}><Text> + </Text></Pressable>
              <Pressable onPress={()=>onRemove(item)}><Text> - </Text></Pressable>
            </View>
            <View>
              <Text>{item.qty} x NGN {item.price.toFixed(2)}</Text>
            </View>
          </View>
         ))}

         {cartItems.length !== 0 && (
          
          <View>
            <View style={{width:130,height:2,backgroundColor:'black'}}></View>
           <View style={{flexDirection:"row"}}>
              <View>
                <Text>Items Price</Text>
              </View>
              <View>
                <Text> NGN {itemsPrice.toFixed(2)} </Text>
              </View>
            </View>

            <View style={{flexDirection:"row"}}>
              <View>
                <Text>Tax Price</Text>
              </View>
              <View>
                <Text> NGN {taxPrice.toFixed(2)} </Text>
              </View>
            </View>

            <View style={{flexDirection:"row"}}>
              <View>
                <Text>Shipping Price</Text>
              </View>
              <View> 
                <Text>{shippingPrice.toFixed(2)}</Text>
              </View>
            </View>
            {/* for the horizontal line */} 
            <View style={{width:130,height:2,backgroundColor:'black'}}></View> 

            <View style={{flexDirection:"row"}}>
              <View>
                <Text style={{fontWeight:'bold'}}>Total Price</Text>
              </View>
              <View> 
                <Text style={{fontWeight:'bold'}}> NGN {totalPrice.toFixed(2)}</Text>
              </View>
            </View>

            <View style={{flexDirection:"row"}}>
              <Pressable onPress={() => alert('Implement Checkout')}>
                <Text>Check Out</Text>
              </Pressable>
            </View>
          </View>
         )}
         </View>
    </ScrollView>
    
  )
}