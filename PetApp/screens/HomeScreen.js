import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles';

// dados estáticos iniciais (substituiremos por armazenamento depois)
const PETS = [
  { id: '1', name: 'Rex', species: 'Cachorro', age: '3 anos', description: 'Labrador brincalhão' },
  { id: '2', name: 'Mimi', species: 'Gato', age: '2 anos', description: 'Calma e carinhosa' },
  { id: '3', name: 'Bolt', species: 'Cachorro', age: '1 ano', description: 'Muita energia' }
];

export default function HomeScreen(props) {
  const { navigation } = props;

  // função para renderizar cada card com createElement
  const renderCard = (pet) => {
    return React.createElement(
      TouchableOpacity,
      {
        key: pet.id,
        style: styles.card,
        onPress: () => navigation.navigate('Details', { pet })
      },
      React.createElement(Text, { style: styles.petName }, pet.name),
      React.createElement(Text, { style: styles.petMeta }, `${pet.species} • ${pet.age}`),
      React.createElement(Text, { style: styles.petMeta }, pet.description)
    );
  };

  return React.createElement(
    ScrollView,
    { style: styles.container },
    React.createElement(Text, { style: styles.headerTitle }, 'Meus Pets'),
    // lista de cards
    PETS.map((p) => renderCard(p))
  );
}
