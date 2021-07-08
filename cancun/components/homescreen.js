import * as React from 'react';
import { Text, View, ScrollView, Image, StyleSheet} from 'react-native';

export default HomeScreen=({navigation})=>{
  return(
   <>
      
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.portada}
            source={require('../assets/image/laboraapp2.png')}
            />
        </View>

        <View style={styles.contenedor}>
          <View style={styles.centrar} >
            <Text style={styles.titulo}>Encuentra aquí las mejores ofertas de empleo </Text>
          </View>
           <View style={styles.centrar}>
                <Text style={styles.centrar}>Todas las ofertas laborales estan certificadas, para encontrar tu trabajo ideal solo navega por nuestros anuncios</Text>
              </View>
              <View styoe={styles.centrar}>
                <Text style={styles.es}>Fotografias Referentes a Trabajos</Text>
              </View>
          <ScrollView horizontal>
              <View>
                <Image
                style={styles.actividad}
                source={require('../assets/image/5.png')}
              />
              </View>

              <View>
                <Image
                style={styles.actividad}
                source={require('../assets/image/4.png')}
                />
              </View>

              <View>
                <Image
                style={styles.actividad}
                source={require('../assets/image/3.png')}
                />
              </View>

              <View>
                <Image
                style={styles.actividad}
                source={require('../assets/image/2.png')}
                />
              </View>
            </ScrollView>

              <View style={styles.centrar}>
                <Text style={styles.titulo}>Nuestras Ventajas</Text>
              </View>

            <View>
              <View>
                <Image style={styles.ciudad}
                source={require('../assets/image/lab1.png')}
              />
              </View>

              <View >
                <Image style={styles.ciudad}
                source={require('../assets/image/lab2.png')}
              />
              </View>

              <View >
                <Image style={styles.ciudad}
                source={require('../assets/image/lab3.png')}
                />
              </View>

              

              <View style={styles.listado}>
                
              </View>
            </View>
          </View>
        </ScrollView>
        
      </>
  );
}

const styles = StyleSheet.create({
 portada:{
    backgroundColor: '#177feb',
    height: 170,
    width: 400,
    flex: 1,
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 42,
    marginVertical: 20,
    justifyContent: 'center',
  },
  contenedor:{
    marginHorizontal: 20,
  },
  actividad:{
    width: 250,
    height: 300,
    marginRight: 10,
  },
  ciudad:{
    width: '100%',
    height:200,
    marginVertical: 5,
  },
  mejores:{
    width: '100%',
    height:200,
    marginVertical:5,
  },
  res:{},
  listado:{
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',

  },
  listadoItem:{
    flexBasis: '49%',
  },
  centrar:{
    alignItems: 'center',
    fontSize:24,
    
  },
  estilom:{
    fontSize:18,
  }
 
});