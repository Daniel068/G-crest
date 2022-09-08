import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    mainView:{
        backgroundColor:"#8bebc8",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        height:512,
        width:305,
        borderRadius:10,
        marginTop:40,
    },
    Checkbox:{
    alignSelf:"center"
    },

    Addtocart:{
        width:108,
        height: 54,
        backgroundColor:"rgba(228, 212, 38, 1)",
        elevation:10,
        borderRadius:10,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        marginTop:70,
    },
    closeiconView:{
        flexDirection:"column",
        height:45,
        width:75,
        backgroundColor:"white",
        borderRadius:10,
        alignSelf:"center",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:40,  
    },
    imageTextView:{
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        marginTop:15,
    },
    lineView:{
        width:150,
        height:1.5,
        backgroundColor:"black",
        borderRadius:5,
        marginTop:10,
        marginBottom:10,
    },
})

export default style