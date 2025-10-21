import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/globalStyles';

export default function DetailsScreen(props) {
  // pegamos o pet que veio via navigation
  const pet = props.route && props.route.params ? props.route.params.pet : null;

  if (!pet) {
    return React.createElement(
      ScrollView,
      { style: styles.container },
      React.createElement(Text, null, 'Pet não encontrado.')
    );
  }

  return React.createElement(
    ScrollView,
    { contentContainerStyle: styles.detailsContainer },
    React.createElement(Text, { style: styles.detailsTitle }, pet.name),
    React.createElement(Text, { style: styles.detailsText }, `Espécie: ${pet.species}`),
    React.createElement(Text, { style: styles.detailsText }, `Idade: ${pet.age}`),
    React.createElement(Text, { style: styles.detailsText }, `Descrição: ${pet.description}`)
  );
}
