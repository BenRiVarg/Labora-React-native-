import * as React from 'react';
import { Text, View, ScrollView,Image, StyleSheet, Button} from 'react-native';

export default DetalleTrabajo = ({navigation}) =>{
  return(
      <>
      
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.portada}
            source={require('../assets/image/laboraapp2.png')}
            />
            <Text>Hola Mundo</Text>
            <Button 
            title='regresar'
            onPress={()=> {
              navigation.goBack();
            }}/>
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
    
  }
})