import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PropertyCard = ({ image, title, pueblo, precio, admin }) => { 
    
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>🏠 Pueblo: {pueblo}</Text>
      <Text style={styles.details}>💰 Precio: ${precio}</Text>
      <Text style={styles.details}>👤 Admin: {admin}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Para sombra en Android
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});

export default PropertyCard;
