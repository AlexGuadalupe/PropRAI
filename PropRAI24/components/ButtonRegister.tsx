import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, Animated, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, textStyle }) => {
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 0.98,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.buttonContainer, { transform: [{ scale }] }]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          style,
        ]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
      >
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 100,
    overflow: 'hidden', // Ensures shadows are not clipped
  },
  button: {
    paddingVertical: 12.5,
    paddingHorizontal: 30,
    borderRadius: 100,
    backgroundColor: '#2ba8fb',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#6fc5ff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10, // Shadow for iOS
  },
  buttonPressed: {
    backgroundColor: '#6fc5ff',
    shadowOpacity: 0.5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomButton;
