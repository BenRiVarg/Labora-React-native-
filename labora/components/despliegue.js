import * as React from 'react';
import { Text,View,StyleSheet} from 'react-native';


export default function Despliegue({datos}){

    const Notificacion=({valor})=>{
        if(valor){
            return(
                <Text style={styles.notificaciónP}>Sí</Text>
            )
        }
        else{
            return(
                <Text>No</Text>
            )
        }
        }
    
    return(
        <View>
            <Text style={styles.tituloInfo}>Tus datos:</Text>
            <View style={styles.espaciado}>
            <Text style={styles.categoria} >Nombre:</Text>
            <Text>{datos.nombre}</Text>
            </View>
            <View style={styles.espaciado}>
            <Text style={styles.categoria} >Correo:</Text>
            <Text>{datos.correo}</Text>
            </View >
            <View style={styles.espaciado}>
            <Text style={styles.categoria} >Ciudad:</Text>
            <Text>{datos.ciudad}</Text>
            </View>
            <View style={styles.espaciado}>
            <Text style={styles.categoria} >Notificaciones:</Text>
            <Notificacion valor={datos.notificacion}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notificaciónP:{
        color: '#13a0a0',
    },
    tituloInfo:{
        color:'#1270d3',
        justifyContent: 'center',
        fontSize: 20,
      }
      ,
    espaciado:{
        marginBottom:5
    }
    ,
    categoria:{
        color:'#00264d'
    }
})