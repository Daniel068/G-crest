import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import Icons  from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import HomeScreen from './Screens/homeScreen/homeSreen';
import Category from './Screens/Category Page/Category';

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

function TabNavigation() {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor:'#3ebe2d',
                height:60,
                borderTopLeftRadius:10,
                borderTopRightRadius:10,
            },
            tabBarLabelStyle:{
                fontSize:11,
                color:'black',
                marginBottom:6,
                fontWeight:"400"
            }

        }}
        >
            <Tab.Screen 
            name= "Home" component = {HomescreenStack} options ={{headerShown: false,
            tabBarIcon:() =>(
                <Icon 
                name='home-filled'
                color={"black"}
                size={25}
                />
            )
            }}
            
            />

            <Tab.Screen 
            name= "Search" component = {CategoryStack} options ={{headerShown: false,
                tabBarIcon:() =>(
                    <Icons 
                    name='search'
                    color={"black"}
                    size={25}
                    />
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation;