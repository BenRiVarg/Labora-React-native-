import React , { useState } from 'react';
import { Text, View, ScrollView,Image, StyleSheet, Button, TouchableOpacity, TextInput, FlatList} from 'react-native';



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
  },
  costco:{
    imagen:"costco",
    empleo: "Encargado de Almacen",
    descripcion:"Encargado de recibir, inventariar y en general gestionar el almacen.",
    horarios: "Lunes a Domingo de 9am a 9pm. Descanso rotativo",
    prestaciones: "Prestaciones superiores a las  de la ley",
    sueldo:"$6000 al mes"
  }
}



export default TrabajosScreen = ({navigation})=>{
  const [jobs, setJobs] = useState([

      {titulo: 'Coca-Cola', body: 'Horario: 9:00 a 6:00 pm', key:'1' ,datos:descripciones.coca},
      {titulo: 'Walmart', body: 'Horario: 8:00 a 4:00 pm', key:'1', datos:descripciones.walmart},
      {titulo: 'Costco', body: 'Horario: 12:00 a 10:00 pm', key:'1', datos:descripciones.costco},
  ]);
  
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
          
             

             
              <View> 
              <FlatList
                data={jobs}
                renderItem ={({item}) =>(
                  <TouchableOpacity
                  onPress={() =>        navigation.navigate('Details',{datos: item.datos})      }>
                   <View style={styles.centrar}>
                      <Text style={styles.titulo} > { item.titulo } </Text>
                      <Button
                      title='Ver más'
                      onPress={() =>        navigation.navigate('Details',{datos: item.datos})      }
                      />
                  </View>

                  </TouchableOpacity>
                )}
                

              />

              </View>
              
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
    fontSize: 32,
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
    width: 275,
    height:180,
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
  pequeno:{
    fontSize:8,
    color: 'gray',
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonStyle:{
    alignItems: 'center',
    backgroundColor: 'teal',
    padding:10,
    width:'100%',
    marginTop: 16,
  },
  
})