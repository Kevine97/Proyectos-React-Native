import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';

const App = () => {
  return (
    <>
      {/* View Principal */}
      <ScrollView>
        {/* View del background*/}
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri:'https://images.pexels.com/photos/4150036/pexels-photo-4150036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
            style={styles.banner}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Qué hacer en Paris</Text>
          <ScrollView horizontal>
            <View>
              <Image
                source={require('./assets/img/actividad1.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View>
              <Image
                source={require('./assets/img/actividad2.jpg')}
                style={styles.ciudad}
              />
            </View>

            <View>
              <Image
                source={require('./assets/img/actividad3.jpg')}
                style={styles.ciudad}
              />
            </View>

            <View>
              <Image
                source={require('./assets/img/actividad4.jpg')}
                style={styles.ciudad}
              />
            </View>

            <View>
              <Image
                source={require('./assets/img/actividad5.jpg')}
                style={styles.ciudad}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Los mejores alojamientos</Text>

          <View>
            <View>
              <Image
                source={require('./assets/img/mejores1.jpg')}
                style={styles.mejores}
              />
            </View>

            <View>
              <Image
                source={require('./assets/img/mejores2.jpg')}
                style={styles.mejores}
              />
            </View>

            <View>
              <Image
                source={require('./assets/img/mejores3.jpg')}
                style={styles.mejores}
              />
            </View>
          </View>

          <Text style={styles.titulo}>Hospedajes en LA</Text>

          <View style={styles.listado}>
            <View style={styles.listadoItem}>
              <Image
                source={require('./assets/img/hospedaje1.jpg')}
                style={styles.mejores}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                source={require('./assets/img/hospedaje2.jpg')}
                style={styles.mejores}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                source={require('./assets/img/hospedaje3.jpg')}
                style={styles.mejores}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                source={require('./assets/img/hospedaje4.jpg')}
                style={styles.mejores}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 4,
  },
  listadoItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
});
export default App;
