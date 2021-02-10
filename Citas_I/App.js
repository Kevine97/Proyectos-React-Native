/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Platform,
} from 'react-native';
import Citas from './componentes/Citas';
import Formulario from './componentes/formulario';
const App = () => {
  const [mostrarForm, guardarMostrarFrom] = useState(false);

  //Definir el State de citas
  const [citas, setCitas] = useState([
  ]);

  //Elimina los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActules) => {
      return citasActules.filter((citas) => citas.id !== id);
    });
  };

  //Muestra u oculta el formulario
  const mostrarFormulario = () => {
    guardarMostrarFrom(!mostrarForm);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      {/* Llamando al Formulario*/}

      <View style={styles.mostrar}>
        <TouchableHighlight
          onPress={() => mostrarFormulario()}
          style={styles.btnEliminar}>
          <Text style={styles.btnTex}>{mostrarForm ? 'Cancerlar cita' : 'Crear nueva cita'}</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.contenido}>
        {mostrarForm ? (
          <Formulario
            citas={citas}
            setCitas={setCitas}
            guardarMostrarFrom={guardarMostrarFrom}
          />
        ) : (
          <>
            <Text style={styles.administrar}>
              {citas.length > 0
                ? 'Administra tus citas'
                : 'No hay citas, agrega una'}
            </Text>
            <FlatList
              style={styles.listado}
              data={citas}
              renderItem={({item}) => (
                <Citas items={item} eliminarPaciente={eliminarPaciente} />
              )}
              keyExtractor={(citas) => citas.id}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  administrar: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: '#428bca',
    marginVertical: 10,
  },
  btnTex: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mostrar: {
    marginHorizontal: '2.5%',
  },
});

export default App;
