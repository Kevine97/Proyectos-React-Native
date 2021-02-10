import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Nosotros = ({navigation}) => {
  const Volver = () => {
    navigation.navigate('Inicio');
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.texto}>Desde Inicio</Text>
        <Button title="Ir a Inicio" onPress={() => Volver()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontWeight: 'bold',
    fontSize: 28,
  },
});

export default Nosotros;
