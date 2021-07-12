import * as React from 'react';
import  { useState } from 'react';
import { Text,TextInput, View, ScrollView, Image, StyleSheet,Button} from 'react-native';


var descripciones={
    coca:{
      imagen:"coca",
      empleo: "Surtidor de CocaCola",
      descripcion:"Carga y descarga de de mercancía",
      horarios: "Lunes a Viernes de 6am a 3pm",
      prestaciones: "Prestaciones de ley",
      sueldo:"$4000 al mes"
    },
    walmart:{
      imagen:"walmart",
      empleo: "Cajero de Sucursal",
      descripcion:"Cajero a tiempo completo , registro de almacen.",
      horarios: "Lunes a Domingo de 9am a 6pm. Descanso los Miécoles",
      prestaciones: "Prestaciones de ley",
      sueldo:"$3000 al mes"
    }
}


var arreglo=["Cach","Don Abeis","Fri"];
export default HomeScreen = ({navigation}) => {

  return (
    
         <ScrollView>
                <View style={{ flexDirection: 'column' }}>
                <Image
                    style={styles.portada}
                    source={require('../assets/image/laboraapp2.png')}
                    />
                
                     
                <Button      title="Go to Jane's profile"      onPress={() =>        navigation.navigate('pruebaDatos',{ concepto:"prueba",datos: descripciones.walmart})      }    />
                </View>
         </ScrollView>    
 
    
  );
};

const styles = StyleSheet.create({
  portada: {
    backgroundColor: '#177feb',
    height: 170,
    width: 400,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 42,
    marginVertical: 20,
    justifyContent: 'center',
  },
  contenedor: {
    marginHorizontal: 20,
  },
  actividad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  ciudad: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  res: {},
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoItem: {
    flexBasis: '49%',
  },
  centrar: {
    alignItems: 'center',
    fontSize: 24,
  },
});
