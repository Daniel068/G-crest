import { StyleSheet } from "react-native";

const style= StyleSheet.create({
    MainView:{
        flex:4,
        flexDirection:"column",
        backgroundColor:"purple",
        borderRadius:10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:"center",
        padding:10,
    },
    TextProduct:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        color:'white',
        position:'absolute',
        top:10,
    }
})

export default style;