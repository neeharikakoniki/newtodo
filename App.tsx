import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoScreen from './src/components/screens/ToDoScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
