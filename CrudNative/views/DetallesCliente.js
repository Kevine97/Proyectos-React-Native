import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Headline, Text, Subheading, Button} from 'react-native-paper';
import globalStyles from '../styles/style';
const DetallesCliente = ({route}) => {
  console.log(route.params);
  const {nombre, telefono, correo, empresa} = route.params.item;
  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.text}>
        Empresa: <Subheading>{empresa}</Subheading>
      </Text>
      <Text style={styles.text}>
        Correo: <Subheading>{correo}</Subheading>
      </Text>
      <Text style={styles.text}>
        Telefono: <Subheading>{telefono}</Subheading>
      </Text>

      <Button style={styles.btn} icon="cancel" mode="contained">
        Eliminar cliente
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontSize: 18,
  },
  btn: {
    marginTop: 80,
    backgroundColor: 'red',
  },
});

export default DetallesCliente;
