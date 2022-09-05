import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import Icons  from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import HomeScreen from './Screens/homeScreen/homeSreen';
import Category from './Screens/Category Page/Category';
import SubCategory from './Screens/subCatergory/subCategory';
import { Image, Text, View } from 'react-native';

function HomescreenStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen  name= "HomeScreen" component = {HomeScreen} options ={{headerShown: false}} />
        </Stack.Navigator>
    )
};
function CategoryStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen  name= "Category" component = {Category} options ={{headerShown: false}} />
        </Stack.Navigator>
    )
};

function SubCategoryStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen  name= "SubCategory" component = {SubCategory} options ={{headerShown: false}} />
        </Stack.Navigator>
    )
};
function TabNavigation() {
    return(
        <Tab.Navigator  

        screenOptions={{
            
            tabBarStyle:{
                backgroundColor:'#3ebe2d',
                height:60,
                borderRadius:10,
                position: 'absolute',
                bottom: 15,
                left:20,
                right: 20,
                elevation:10,
                
                 
            },
            tabBarLabelStyle:{
                fontSize:11,
                color:'black',
                marginBottom:6,
                fontWeight:"400",
                //display:"none" - to turn off icon labels
                
                
            },
      
        }}
        >
            <Tab.Screen 
            name= "Home" component = {HomescreenStack} options ={{headerShown: false,
            tabBarIcon:({focused}) =>(
               <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Image
                        source={{uri:"https://cdn-icons-png.flaticon.com/128/69/69524.png"}}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused? "#e4d426" : "black"
                        }}
                    />
               
                </View>
                
            )
            }}
            
            />

            <Tab.Screen 
            name= "Search" component = {CategoryStack} options ={{headerShown: false,
                tabBarIcon:({focused}) =>(
                    <View>
                         <Image
                             source={{uri:"https://cdn-icons-png.flaticon.com/128/2330/2330104.png"}}
                             resizeMode='contain'
                             style={{
                                 width:25,
                                 height:25,
                                 tintColor: focused? "#e4d426" : "black"
                             }}
                         />
                    
                     </View>
                     
                 )
                 }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation;