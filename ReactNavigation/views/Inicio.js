import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Inicio = ({navigation}) => {
  const visitarNosotros = () => {
    navigation.navigate('Nosotros');
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.texto}>Desde Inicio</Text>
        <Button title="Ir a Nosotros" onPress={() => visitarNosotros()} />
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
export default Inicio;
