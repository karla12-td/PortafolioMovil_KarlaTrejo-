import { useEffect } from "react"
import { View, Text,StyleSheet, Image } from "react-native"

export default function Splash({navigation}){

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Login")
        },3000)

    },[])

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}> Dreaming</Text>
            <Text style={styles.titulo}> Flowers</Text>

            <Image source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/346/346167.png'
            }} style={styles.logo}/>
        </View>
    )
}

const styles=StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F9CCE2FF'
    },
    logo:{
        width:100,
        height:100,
        marginBottom:20,
    },
    titulo:{
      fontSize:50,
      fontWeight:'bold',
      color:'#FEFEFEFF',
      marginBottom:10,
    }
})