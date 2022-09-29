import { StyleSheet } from "react-native";

const style= StyleSheet.create({
    MainView:{
        flex:0.1,
        flexDirection:"row",
        backgroundColor:"pink",
        borderRadius:10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:"center",
        marginBottom:10,
    },
    Text:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
        color:'white',
    },
    cartView:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginLeft:15
    },
    cartItemView:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'white',
        height:20,
        width:20,
        borderRadius:20,
        zIndex:1500,

    }
})

export default style;