import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
  const {pais, ciudad} = busqueda;
  const [animacionesBoton] = useState(new Animated.Value(1));
  const animacionEntreda = () => {
    Animated.spring(animacionesBoton, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const animacionSalida = () => {
    Animated.spring(animacionesBoton, {
      toValue: 1,
      friction: 2,
      tension: 30,
      useNativeDriver: true,
    }).start();
  };

  const estiloAnimacion = {
    transform: [
      {
        scale: animacionesBoton,
      },
    ],
  };

  const mostrarAlerta = () => {
    Alert.alert(
      'Advertencia',
      'Agrega una ciudad y país para realizar la busqueda',
      [{text: 'Entendido'}],
    );
  };

  const consultarClima = () => {
    if (pais.trim() === '' || ciudad.trim() === '') {
      mostrarAlerta();
      return;
    }
    guardarConsultar(true);
  };
  return (
    <>
      <View style={styles.formulario}>
        {/*Input para leer las ciudades*/}
        <View>
          <TextInput
            value={ciudad}
            placeholder="Ciudad"
            placeholderTextColor="#666"
            style={styles.input}
            onChangeText={(ciudad) => guardarBusqueda({...busqueda, ciudad})}
          />
        </View>

        {/*Picker para leer los paises */}
        <View>
          <Picker
            style={styles.picker}
            selectedValue={pais}
            onValueChange={(pais) => guardarBusqueda({...busqueda, pais})}>
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="Nicaragua" value="NI" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="Mexico" value="MX" />
            <Picker.Item label="Argentina" value="ARG" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Peru" value="PE" />
          </Picker>
        </View>

        {/*Submit */}
        <TouchableWithoutFeedback
          onPressIn={() => animacionEntreda()}
          onPressOut={() => animacionSalida()}
          onPress={() => consultarClima()}>
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <Text style={styles.textoBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {},
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  picker: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  textoBuscar: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Formulario;
