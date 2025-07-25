// screens/SplashScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>연애상담 앱</Text>
      <Text style={styles.subtitle}>지금 당신의 연애 고민을 들어줄게요</Text>
      <Button
        title="시작하기"
        onPress={() => navigation.navigate('Onboarding')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 32,
    textAlign: 'center',
  },
});