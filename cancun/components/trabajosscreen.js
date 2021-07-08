import * as React from 'react';
import { Text, View, ScrollView,Image, StyleSheet, Button, TouchableOpacity} from 'react-native';



export default TrabajosScreen = ({navigation})=>{
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
            <Text style={styles.titulo}> Trabajos </Text>
          </View>
          
              <View style={styles.ciudad}>
                <Image style={styles.ciudad} source={require('../assets/image/8.png')}/>
              </View>
              <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=>
              navigation.push("detalleTrabajo"),{nombre: 'coca'}}
            >
              <Text style={styles.buttonTextStyle}>
                Ver mäs
              </Text>
          </TouchableOpacity>

              <View style={styles.ciudad}>
                <Image style={styles.ciudad} source={require('../assets/image/9.png')}/>
              </View>
              <Button      title="Ver más"onPress={() => navigation.push('detalleTrabajo')}    />

          </View>
        </ScrollView>
        
      </>
            
  );
};

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
    
  },
   titleTet:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  buttonTextStyle:{
    color: 'white',
    fontWeight: 'bold',
  },
  buttonStyle:{
    alignItems: 'center',
    backgroundColor: 'teal',
    padding:10,
    width:'100%',
    marginTop: 16,
  },
})