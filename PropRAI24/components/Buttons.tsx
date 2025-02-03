import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Animated } from 'react-native';

const AgentButton = () => {
  const [shadowAnim] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(shadowAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(shadowAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.shadowContainer}>
        <Animated.View
          style={[
            styles.shadowTop,
            { transform: [{ scaleY: shadowAnim }] },
          ]}
        />
        <Text style={styles.buttonText}>AGENTE</Text>
        <Animated.View
          style={[
            styles.shadowBottom,
            { transform: [{ scaleY: shadowAnim }] },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 160,
    height: 56,
    borderWidth: 3,
    borderColor: '#149CEA',
    backgroundColor: 'transparent',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shadowContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowTop: {
    position: 'absolute',
    top: -10,
    left: '3%',
    width: '95%',
    height: '40%',
    backgroundColor: '#212121',
  },
  shadowBottom: {
    position: 'absolute',
    bottom: -10,
    left: '3%',
    width: '95%',
    height: '40%',
    backgroundColor: '#212121',
  },
});

export default AgentButton;
