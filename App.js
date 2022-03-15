import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './assets/imagem-topo.jpg';
import Foto from './assets/imgPerfil.jpg';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image style={ estilos.fotoTopo } source={Capa} />

      <View style={ estilos.boxDescricao }>
        <Image style={ estilos.fotoPerfil } source={Foto} />
        <Text style={ estilos.titulo }>Jackson de Borba</Text>
        <Text style={ estilos.cargo }>Estudando desenvolvimento de app mobile com React Native</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  fotoTopo: {
    flex: 1,
  },

  boxDescricao: {
    flex: 1,
    alignItems: 'center',
  },

  fotoPerfil: {
    marginTop:20,
    marginBottom:20,
    width: 100,
    height: 100,
    borderRadius:50
  },
  titulo: {
    marginBottom:10,
    fontSize: 22,
  },
  cargo: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16
  }
});