import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Expo!</Text>

      <Image
        source={{ uri: 'https://picsum.photos/300' }}
        style={styles.image} />

      <TextInput
        placeholder="Digite algo"
        style={styles.input} />

      <Button
        title='Enviar' onPress={() => { alert('Botão Clicado') }} />

      <View style={{ flexDirection: 'row', marginTop: 24 }}>
        <View style={[styles.box, { backgroundColor: '#f66', flex: 2 }]} />
        <View style={[styles.box, { backgroundColor: '#6f6', flex: 1 }]} />
        <View style={[styles.box, { backgroundColor: '#66f', flex: 1 }]} />
      </View>

      <Ionicons name="home" size={32} color="#0a7" style={{ marginTop: 24 }} />

    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    marginTop: 16,
  },

  box: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginHorizontal: 4,
  },

});