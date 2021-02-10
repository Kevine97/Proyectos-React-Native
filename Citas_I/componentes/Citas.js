import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

const Citas = ({items, eliminarPaciente}) => {
  const dialogoEliminar = (id) => {
    eliminarPaciente(id);
  };

  return (
    <View style={styles.citas}>
      <View>
        <Text style={styles.label}>Paciente: </Text>
        <Text style={styles.texto}>{items.paciente}</Text>
      </View>

      <View>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.texto}>{items.propietario}</Text>
      </View>

      <View>
        <Text style={styles.label}>Sintomas: </Text>
        <Text style={styles.texto}>{items.sintomas}</Text>
      </View>

      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(items.id)}
          style={styles.btnEliminar}>
          <Text style={styles.btnTex}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  citas: {
    backgroundColor: '#fff',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  btnTex: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Citas;
