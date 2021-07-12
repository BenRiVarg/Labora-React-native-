import * as React from 'react';
import { Text,TextInput, View,StyleSheet,Button,Picker,CheckBox } from 'react-native';
import  { useState } from 'react';

export default function Formulario({enviarDatos}){

    const [data, setData]=useState({
        nombre:'',
        correo:'',
        ciudad:"Morelia",
        notificacion:false
    });
    const [nombre,setNombre]=useState('');
    const [correo,setCorreo]=useState('');
    const [ciudad,setCiudad]=useState('Morelia');
    const [notificacion,setNotificacion]=useState(false);

    const cambioNombre=(valor)=>{
        //setNombre(valor);
        data.nombre=valor;
    }

    const cambioCorreo=(valor)=>{
        //setNombre(valor);
        data.correo=valor;
    }

    const cambioCiudad=(itemValue, itemIndex)=>{
        data.ciudad=itemValue
    }

    const cambioNotificacion=(value)=>{
        setNotificacion(!notificacion);
        data.notificacion=value;
    }

    return(
            <View>
        <View style={styles.container}>
             <TextInput
                        style={styles.input}
                        placeholder="Ingresa tu Nombre"
                        onChangeText={cambioNombre}
                        defaultValue={nombre}
                    />
            <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu Correo"
                    onChangeText={cambioCorreo}
                    defaultValue={correo}
                />

            <Picker
                    selectedValue={ciudad}
                    style={{ height: 50, width: 150 }}
                    defaultValue={ciudad}
                   // onValueChange={(itemValue, itemIndex) => setCiudad(itemValue)}
                   onValueChange={cambioCiudad}
                >
                <Picker.Item label="CDMX" value="CDMX" />
                <Picker.Item label="Morelia" value="Morelia" />
            </Picker>
            <View style={styles.checkboxContainer}>
            <CheckBox
        value={notificacion}
        onValueChange={cambioNotificacion}
        style={styles.checkbox}
        />
        <Text style={styles.label}>¿Quieres recibir notificaciones a tu correo?</Text>
        </View>
                <Button      title="Enviar Información"      onPress={() =>       {
                    
                    setData(
                        data
                        )
                        
                    enviarDatos(data);
                    }      }    />
                   
        </View>
        </View>
        
    );

   
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
    checkbox: {
        alignSelf: "center",
      },
    label: {
      margin: 8,
    },

    input:{
        height:40,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:'#004d80'
      },
  });