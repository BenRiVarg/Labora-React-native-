import * as React from 'react';
import { Text, View, ScrollView, Image, StyleSheet,Button } from 'react-native';
import  { useState } from 'react';

export default HomeScreen = ({navigation,route}) => {
  
    const[almacenamiento,setAlmacenamiento]=useState([]);
    var prueba="valor";
 
  return (
    
         <ScrollView 
        // onFocus={setAlmacenamiento(prueba)}
         >
                <View style={{ flexDirection: 'column' }}>
                <Image
            style={styles.portada}
            source={require('../assets/image/mail.png')}
            />
                <Text>
                    Aqui se debe ver el nombre de: {route.params.datos.nombre}
                </Text>
                <Text>
                    Espacios en el array: {almacenamiento.length}
                </Text>
                <Button
        onPress={() => {
          console.log(almacenamiento);
          console.log("Disparandose")
          //var comeGordo=almacenamiento;
          //comeGordo.push("come")
          setAlmacenamiento(almacenamiento.push(prueba));
          console.log(almacenamiento);
        }}
       
        title="Probando"
      />
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
