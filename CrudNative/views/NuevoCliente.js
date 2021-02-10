import React, {useState} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider as PaperProvider
} from 'react-native-paper';
import globalStyles from '../styles/style';
import axios from 'axios';

const NuevoCliente = ({navigation, route}) => {
  const {guardarconsultarAPI} = route.params;

  const [nombre, guardarNombre] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [correo, guardarCorreo] = useState('');
  const [empresa, guardarEmpresa] = useState('');
  const [alerta, guardarAlerta] = useState(false);
  //Almacena el cliente en la BD

  const guardarCliente = async () => {
    //Validar
    if (
      nombre.trim() === '' ||
      telefono.trim() === '' ||
      correo.trim() === '' ||
      empresa.trim() === ''
    ) {
      guardarAlerta(true);
      return;
    }
    //Generar el cliente
    const cliente = {
      nombre,
      telefono,
      correo,
      empresa,
    };
    console.log(cliente);
    //Guardar el cliente
    try {
      if (Platform.OS == 'android') {
        await axios.post('http://192.168.88.15:3000/clientes', cliente);
      } else {
        await axios.post('http://localhost:3000/clientes', cliente);
      }
    } catch (error) {
      console.log(error);
    }

    //Redireccionar
    navigation.navigate('Inicio');
    //Limpiar el formulario
    guardarNombre('');
    guardarEmpresa('');
    guardarTelefono('');
    guardarCorreo('');

    guardarconsultarAPI(true);
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}> Añadir nuevo cliente</Headline>

      <TextInput
        label="Nombre"
        placeholder="Kevin"
        onChangeText={(nombre) => guardarNombre(nombre)}
        value={nombre}
        style={styles.input}
        
      />

      <TextInput
        label="Telefono"
        placeholder="8888-8888"
        onChangeText={(telefono) => guardarTelefono(telefono)}
        value={telefono}
        style={styles.input}
        
      />

      <TextInput
        label="Correo"
        placeholder="correo@correo.com"
        value={correo}
        onChangeText={(correo) => guardarCorreo(correo)}
        style={styles.input}
      />

      <TextInput
        label="Empresa"
        placeholder="Ingemann SA"
        onChangeText={(empresa) => guardarEmpresa(empresa)}
        value={empresa}
        style={styles.input}
      />

      <Button
        style={{backgroundColor: '#1774F2'}}
        icon="pencil-circle"
        mode="contained"
        onPress={() => guardarCliente()}>
        Guardar cliente
      </Button>
      <Portal>
        <Dialog
          visible={alerta}
          onDismiss={() => guardarAlerta(false)}
          style={{backgroundColor: '#FFF'}}>
          <Dialog.Title> ⚠️ ¡Adevertencia!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => guardarAlerta(false)}>De acuerdo</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;
