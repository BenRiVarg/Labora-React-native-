import * as React from 'react';
import  { useState } from 'react';
import { TouchableWithoutFeedback,Text, View, ScrollView, Image, StyleSheet,SafeAreaView,FlatList,Keyboard} from 'react-native';

import Form from './formulario';
import Despliegue from './despliegue';

export default Registro = ({navigation}) => {
  const[almacenamiento,setAlmacenamiento]=useState(
    {nombre:'',
    correo:'',
    ciudad:'',
    notificacion:false}
  );
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
      //console.log(info)
      
     

     setImpresion(valoresImpresionExistentes=>{
        
      /*
      console.log("---------ANTIGUO ESTADO---------")
      console.log(valoresImpresionExistentes);
      console.log("------------------")
      */
      return [{nombre:info.nombre},...valoresImpresionExistentes];
    })

  
      console.log(info.notificacion)
      setAlmacenamiento({
        nombre:info.nombre,
        correo:info.correo,
        ciudad:info.ciudad,
        notificacion:info.notificacion
      });
    }
  return (
    <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()}>
         <ScrollView>
                <View style={{ flexDirection: 'column' }}>
                    <Image
                        style={styles.portada}
                        source={require('../assets/image/laboraapp2.png')}
                        />
                    <View style={styles.container}>
                         <Text style={styles.instrucciones}>Registra tus datos para recibir ofertas de tu localidad. Sí deseas notificaciones en tu correo electrónico marca recibir notificaciones</Text>
                    </View>
                    <Form enviarDatos={enviarDatos}/>

                    <View style={{marginTop:15 ,marginLeft: 15}}>
                         <Despliegue  datos={almacenamiento}/>
                    </View>
                    <Text style={styles.tituloListado}>Personas que ya confían en Labora</Text>
                    <SafeAreaView style={styles.container}>
                          <FlatList
                            data={impresion}
                            renderItem={renderItem}
                          />
                        </SafeAreaView>

                </View>
         </ScrollView>    
    </TouchableWithoutFeedback>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
  
  instrucciones:{
    marginLeft:2,
    textAlign:'justify',
    marginTop:10,
    marginBottom:10
  },

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
  ,
  tituloListado:{
    backgroundColor:'#177feb',
    padding:5,
    color:'white',
    textAlign:'center',
    marginTop:15,fontWeight:'bold'
  }
});
