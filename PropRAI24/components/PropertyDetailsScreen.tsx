import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropertyDetailsScreen = ({ route }) => {
  const { image, title, pueblo, precio, admin } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>🏠 Pueblo: {pueblo}</Text>
      <Text style={styles.details}>💰 Precio: ${precio}</Text>
      <Text style={styles.details}>👤 Admin: {admin}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
    marginVertical: 4,
  },
});

export default PropertyDetailsScreen;