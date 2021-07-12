import * as React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Button } from 'react-native';

export default ExtraScreen = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
        <Image
            style={styles.portada}
            source={require('../assets/image/laboraapp2.png')}
            />
            
        </View>
        <View style={styles.contenedor} >
          <Text style={styles.titulo}>Misión </Text>
         <View style={styles.centrar}>
                <Text style={styles.centrar}>Somos una empresa comprometida con ofrecer la mejor experiencia para                   buscar empleo, aquí encontraras transparencia, amabilidad y seriedad en cada oferta de empleo</Text>
              </View>
        <Text style={styles.titulo}>Visión </Text>
        <View style={styles.centrar}>
                <Text style={styles.centrar}>Creer que cada persona tiene el empleo ideal y llevar hasta ellos las ofertas laborales que más se apeguen a su perfil.  </Text>
              </View>
              <View style={styles.centrar} >

                     <Button
                      title="Volver a Home"
                      onPress={() => navigation.popToTop()}
                      />
              </View>
        </View>
        <View>
          <Text styles={styles.pequeno} > Labora 2021 </Text>
        </View>
        
      </ScrollView>
    </>
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
  pequeno:{
    fontSize:8,
    color: 'gray',
    alignItems: 'center',
    justifyContent:'center',
  }
});
