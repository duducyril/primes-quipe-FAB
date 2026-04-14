import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [points, setPoints] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prime équipe FAB</Text>
      <Text style={styles.subtitle}>Article 13 des équipes du mois</Text>
      <Text style={styles.description}>
        Ce prototype te permet de suivre les points d'une équipe et de simuler une prime mobile.
      </Text>
      <Text style={styles.points}>{points} points</Text>
      <Pressable style={styles.button} onPress={() => setPoints(points + 1)}>
        <Text style={styles.buttonText}>Ajouter un point</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.resetButton]} onPress={() => setPoints(0)}>
        <Text style={styles.buttonText}>Réinitialiser</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d3b66',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#f4d35e',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#dbe9ee',
    textAlign: 'center',
    marginBottom: 24,
  },
  points: {
    fontSize: 48,
    color: '#f95738',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#f4d35e',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 12,
    width: '100%',
  },
  resetButton: {
    backgroundColor: '#ee964b',
  },
  buttonText: {
    color: '#0d3b66',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
