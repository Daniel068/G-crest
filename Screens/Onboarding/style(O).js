import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView :{
        flex: 1,
        backgroundColor:"#8bebc8",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center",
        padding:10,
        alignContent:"center"
    },
    heroTile:{
        width:320,
        height:277,
        backgroundColor:"#ffffff",  
        borderRadius:10,
        alignSelf:"center",
        marginTop:200,
        
    },
    text:{
        textAlign:"center",
        fontSize: 32,
        fontWeight:"400",
        fontFamily:"",
        fontStyle:"italic",
        lineHeight:43,
        marginTop:10,
       
    },
    button:{
        width:120,
        height:45,
        elevation: 20,
        backgroundColor:"#73BB5F",
        borderRadius:10,
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:70,
        justifyContent:"center",
        
    },

});

export default style;