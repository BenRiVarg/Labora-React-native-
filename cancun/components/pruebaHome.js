import * as React from 'react';
import  { useState } from 'react';
import { Text,TextInput, View, ScrollView, Image, StyleSheet,Button,SafeAreaView,FlatList} from 'react-native';

import Form from './formulario';

export default HomeScreen = ({navigation}) => {
    const[almacenamiento,setAlmacenamiento]=useState('');
    const[impresion,setImpresion]=useState([]);

    

    //Componente para mostrar cada dato
    const Registro=({nombre})=>(
      <View>
        <Text style={styles.nombreRegistro}>{nombre}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Registro nombre={item.nombre} />

    );

      
    const enviarDatos=(info)=>{
      console.log("Llega hasta aquí");
      console.log(impresion)
      setImpresion(valoresImpresionExistentes=>{
        return[
          info,
          ...valoresImpresionExistentes
        ];
      })
    }
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
                        onChangeText={text => setAlmacenamiento(text)}
                        defaultValue={almacenamiento}
                    />
                      <Text style={{padding: 10, fontSize: 42}}>
                        Valor Recibido: {almacenamiento}
                    </Text>
                    <SafeAreaView style={styles.container}>
                      <FlatList
                        data={impresion}
                        renderItem={renderItem}
                        //keyExtractor={item => item.id}
                      />
                    </SafeAreaView>

                    <Registro/>
                <Button      title="Go to Jane's profile"      onPress={() =>       {
                  console.log("disparandose");
                  var nuevoRegistro={nombre: almacenamiento}
                  setImpresion(valoresImpresionExistentes=>{
                    return[
                      nuevoRegistro,
                      ...valoresImpresionExistentes
                    ];
                  })
              
                }      }    />

                <Form enviarDatos={enviarDatos}/>
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

  nombreRegistro:{
    color:'#177feb',
    justifyContent: 'center',
    fontSize: 20,
  }
});
