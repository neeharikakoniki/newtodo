import React, { Suspense, lazy} from 'react';
//import {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, View } from 'react-native';
import './src/i18n';


const ToDoScreen = lazy(() => import('./src/components/screens/ToDoScreen'));

export default function App() {
  /*
  const [showScreen, setShowScreen] = useState(false);
  // Force 3-second delay before rendering the lazy component
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  */

  return (
    <SafeAreaView style={styles.container}>
      <Suspense fallback={<Loader />}>
        <ToDoScreen />
      </Suspense>
    </SafeAreaView>
  );
}


const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" color="#00796b" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
