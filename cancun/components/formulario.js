import * as React from 'react';
import { Text,TextInput, View,StyleSheet,Button,Picker,CheckBox } from 'react-native';
import  { useState } from 'react';

export default function Formulario({enviarDatos}){

    const [data, setData]=useState({
        nombre:'',
        correo:'',
        ciudad:'',
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
        console.log(value);
        setNotificacion(!notificacion);
        data.notificacion=value;
    }

    return(
        <View style={styles.container}>
             <TextInput
                        style={{height: 40}}
                        placeholder="Ingresa tu Nombre"
                        onChangeText={cambioNombre}
                        defaultValue={nombre}
                    />
            <TextInput
                    style={{height: 40}}
                    placeholder="Ingresa tu Correo"
                    onChangeText={cambioCorreo}
                    defaultValue={correo}
                />

            <Picker
                    selectedValue={ciudad}
                    style={{ height: 50, width: 150 }}
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
        <Text style={styles.label}>Do you like React Native?</Text>
        </View>
                <Button      title="Enviar Información"      onPress={() =>       {
                    console.log("enviando Información");
                    setData(
                        data
                        )
                    enviarDatos(data);
                    }      }    />
                   
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
  });