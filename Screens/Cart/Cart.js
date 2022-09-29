import { View, Text, ScrollView, Pressable } from 'react-native'
import React, {useState} from 'react'
import Header from '../Components/Header'
import Basket from '../Components/Basket'
import data from '../Components/Data';
import Main from '../Components/Main'
import Product from '../Components/Product';

export default function Cart() {
  const {products} = data;
  const [cartItems, setCartItems] = useState ([]);
  function onAdd (product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? {... exist, qty: exist.qty + 1} : x));
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };
  const onRemove =(product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1 ){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else{
      setCartItems(cartItems.map((x) => x.id === product.id ? {... exist, qty: exist.qty - 1} : x));
    }
  };

  return (
    <View style={{flex:1, backgroundColor:"skyblue"}}>
      <Header countCartItems={cartItems.length} ></Header>
      <View style={{flexDirection:'row',flex:1, padding:5}} >
        <Main onAdd={onAdd} products={products}></Main>
        <Basket 
        onAdd={onAdd} 
        onRemove={onRemove}
        cartItems={cartItems}></Basket>
      </View>
    </View>
  )
}