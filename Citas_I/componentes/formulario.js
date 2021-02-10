import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Formulario = ({citas, setCitas, guardarMostrarFrom}) => {
  const [paciente, guardarPaciente] = useState('');
  const [propietario, guardarPropietario] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');
  const [sintomas, guardarSintomas] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};

    guardarFecha(date.toLocaleDateString('es-NI', opciones));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarHora = (hora) => {
    const op = {hour: 'numeric', minute: '2-digit'};

    guardarHora(hora.toLocaleString('es-NI', op));
    hideDatePicker();
  };

  const crearNuevacita = () => {
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      mostrarAlerta();
      return;
    }

    const cita = {paciente, propietario, telefono, fecha, hora, sintomas};

    cita.id = shortid.generate();
    console.log(cita);
    const citasNuevas = [...citas, cita];
    console.log(citasNuevas);
    setCitas(citasNuevas);

    //Ocultar el formulario
    guardarMostrarFrom(false);

    //Resetear formulario
  };

  //Mostrar Alerta
  const mostrarAlerta = () => {
    Alert.alert(
      'Error', //Titulo
      'Todos los campos son obligatorios',
      [
        {
          text: 'OK',
        },
      ],
    );
  };

  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarPaciente(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Dueño: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarPropietario(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Telefono: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarTelefono(texto)}
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text style={styles.label}>Fecha: </Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
          />
          <Text>{fecha}</Text>
        </View>

        <View>
          <Text style={styles.label}>Hora: </Text>
          <Button title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
          />
          <Text>{hora}</Text>
        </View>

        <View>
          <Text style={styles.label}>Sintomas: </Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(texto) => guardarSintomas(texto)}
          />
        </View>

        <TouchableHighlight
          onPress={() => crearNuevacita()}
          style={styles.btnEliminar}>
          <Text style={styles.btnTex}>Crear nueva cita</Text>
        </TouchableHighlight>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    marginVertical: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    marginHorizontal: '2.5%',
    marginVertical: 10,
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
});
export default Formulario;
