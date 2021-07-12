import * as React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';



export default HomeScreen = ({navigation,route}) => {
  
  var cadenaImagen="../assets/image/"+route.params.datos.imagen;
  console.log(typeof(cadenaImagen));

  const ImagenCoca=()=>{
    return(
    <Image
    style={styles.portada}
    source={require('../assets/image/8.png')}
    />
    );
  }

  const SurtidorImagen=(imagen)=>{
   console.log(imagen.imagen);
   switch(imagen.imagen){
     case "coca":
      return(
        <View>
          <ImagenCoca/>
        </View>
      )
     break;
   }
  
  }
  return (
    
         <ScrollView>
                <View style={{ flexDirection: 'column' }}>
                <SurtidorImagen imagen={route.params.datos.imagen}/>
                <Text>
                    Empleo: 
                </Text>
                <Text>
                    {route.params.datos.empleo}
                </Text>
                <Text>
                    Descripcion: 
                </Text>
                <Text>
                    {route.params.datos.descripcion}
                </Text>
                <Text>
                    Horarios:
                </Text>
                <Text>
                    {route.params.datos.horarios}
                </Text>
                <Text>
                    Prestaciones:
                </Text>
                <Text>
                    {route.params.datos.prestaciones}
                </Text>
                <Text>
                    Sueldo:
                </Text>
                <Text>
                    {route.params.datos.sueldo}
                </Text>
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
