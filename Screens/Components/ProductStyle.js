import { StyleSheet } from "react-native";

const style= StyleSheet.create({
    MainView:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"black",
        borderRadius:10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:"center"
    },
    button:{
        backgroundColor:'blue',
        width:100,
        height:40,
        borderRadius:10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:15,
        fontWeight:'500'
    },
    PriceText:{
        fontSize:17,
        fontWeight:'bold',
        marginBottom:6
    },
    nameText:{
        fontSize:17,
        fontWeight:'500',
        marginBottom:6
    },
})

export default style;