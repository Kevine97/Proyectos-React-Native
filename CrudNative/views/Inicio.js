import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import {List, Headline, Button, FAB} from 'react-native-paper';
import globalStyles from '../styles/style';

const Inicio = ({navigation}) => {
  const [clientes, guardarClientes] = useState([]);

  const [consultarAPI, guardarconsultarAPI] = useState(true);

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const resultado = await axios.get('http://192.168.88.15:3000/clientes');
        guardarClientes(resultado.data);
        guardarconsultarAPI(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (consultarAPI) {
      obtenerClientesAPI();
    }
  }, [consultarAPI]);

  return (
    <View style={globalStyles.contenedor}>
      <Button
        icon="plus-circle"
        onPress={() =>
          navigation.navigate('NuevoCliente', {guardarconsultarAPI})
        }>
        Nuevo Cliente
      </Button>

      <Headline style={globalStyles.titulo}>
        {clientes.length === 0 ? 'No hay clientes registrados' : 'Clientes'}{' '}
      </Headline>
      <FlatList
        data={clientes}
        keyExtractor={(cliente) => cliente.id.toString()}
        renderItem={({item}) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
            onPress={() => navigation.navigate('DetallesCliente', {item})}
          />
        )}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() =>
          navigation.navigate('NuevoCliente', {guardarconsultarAPI})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 20,
  },
});
export default Inicio;
