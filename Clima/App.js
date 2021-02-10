import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Formulario from './components/Formulario';
import Clima from './components/clima';
const App = () => {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardaarResultado] = useState({});
  const {ciudad, pais} = busqueda;
  const [bgColor, guardarBgColor] = useState('rgb(71, 149, 212)');

  useEffect(() => {
    const consultarCLima = async () => {
      if (consultar) {
        console.log(ciudad + '' + pais);
        const appId = '8a0012897ad6b7ca9e7fdc4a07e3052d';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          console.log(resultado);
          guardaarResultado(resultado);
          guardarConsultar(false);

          //Modifica los colores de fondo
          //Grados Kelvin
          const kelvin = 273.15;
          const {main} = resultado;
          const actual = main.temp - kelvin;

          if (actual < 10.0) {
            guardarBgColor('rgb(105, 108, 149)');
          } else if (actual >= 10 && actual < 25) {
            guardarBgColor('rgb(71, 149, 212)');
          } else {
            guardarBgColor('rgb(178, 28, 61)');
          }
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarCLima();
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert('Advertencia', 'La ciudad solicitada no existe', [
      {text: 'Entendido'},
    ]);
  };

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  const bgColorApp = {
    backgroundColor: bgColor,
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.contenido}>
            <Clima resultado={resultado} />
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
