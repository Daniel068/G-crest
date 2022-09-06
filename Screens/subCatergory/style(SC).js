import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor:"#8bebc8",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center",
        
        alignItems:"center"
    },
    Producttile1:{
        width:350,
        height:157,
        borderRadius:10,
        backgroundColor:"rgba(217,217,217, 1)",
        flexDirection:"row",
        marginTop:15,
        alignItems:"center",
        justifyContent:"space-evenly",

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
       marginTop:15,
       marginLeft:17,

    },

    iconView:{
        flexDirection:"row",
        height:45,
        width:75,
        backgroundColor:"white",
        borderRadius:10,
        alignSelf:"flex-start",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:15,
        marginRight:40,

        
    },
    CategoryTextView:{
        height:45,
        width:217,
        backgroundColor:"rgba(217, 217, 217, 0.3)",
        borderRadius:10,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:15,
        marginLeft:10,

    },
    placeholder:{
        backgroundColor:'#CEDFD9',
        borderRadius:10,
        paddingLeft:10,
        flex:1,

    },
    searchContainer:{
        flexDirection: 'row',   
        backgroundColor:'#CEDFD9',
        borderRadius:10,
        alignContent:"center",
        alignItems:"center",
        justifyContent:'center'   
    },
    searchIcon:{
        padding:7,
    }
})

export default style