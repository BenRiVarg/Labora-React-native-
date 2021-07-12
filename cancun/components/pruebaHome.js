import * as React from 'react';
import  { useState } from 'react';
import { Text,TextInput, View, ScrollView, Image, StyleSheet,Button} from 'react-native';


var descripciones={
    coca:{
      imagen:"coca",
      empleo: "Surtidor de CocaCola",
      descripcion:"Carga y descarga de de mercancía",
      horarios: "Lunes de 6am a 3pm",
      prestaciones: "Prestaciones de ley",
      sueldo:"$4000 al mes"
    }
}


var arreglo=["Cach","Don Abeis","Fri"];
export default HomeScreen = ({navigation}) => {
    const[valor,setValor]=useState('Pedrito');
  return (
    
         <ScrollView>
                <View style={{ flexDirection: 'column' }}>
                <Image
                    style={styles.portada}
                    source={require('../assets/image/laboraapp2.png')}
                    />
                  <TextInput
                        style={{height: 40}}
                        placeholder="Ingresa el valor"
                        onChangeText={text => setValor(text)}
                        defaultValue={valor}
                    />
                      <Text style={{padding: 10, fontSize: 42}}>
                        Valor Recibido: {valor}
                    </Text>
                <Button      title="Go to Jane's profile"      onPress={() =>        navigation.navigate('pruebaDatos',{ concepto:"prueba",datos: descripciones.coca})      }    />
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
