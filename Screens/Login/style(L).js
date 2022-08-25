import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor:"#8bebc8",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center",
        padding:10,
        alignItems:"center"
    },
    heroTile:{
        width:319,
        height:533,
        backgroundColor:"#fff",  
        borderRadius:10,
        alignSelf:"center",
        marginTop:50,
        justifyContent:"center",
        marginBottom:50,
        alignItems:"center",
        padding:10,
        
    },
    button:{
        width:175,
        height:45,
        elevation: 20,
        backgroundColor:"#73BB5F",
        borderRadius:10,
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:80,
        justifyContent:"center",
        marginBottom:10
    },
    placeholder:{
        backgroundColor:'#CEDFD9',
        width:277,
        height:52,    
        marginBottom:30,
        borderRadius:10,
        paddingLeft:10
    },
    text:{
        fontSize:24,
        fontWeight:"500",
        marginBottom:90,
        textAlign:"center"
        
    },
    Btntext:{
        fontSize:24,
        fontWeight:"500",
        color:"white",
        textAlign:"center",
    }
});


export default style;
