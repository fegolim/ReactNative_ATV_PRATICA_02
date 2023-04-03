import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Valor from './src/valores';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Valor
          um={parseInt(Math.random() * (10) + 11)}
          dois={parseInt(Math.random() * (10) + 21)}
          tres={parseInt(Math.random() * (10) + 31)}
          quatro={parseInt(Math.random() * (10) + 41)}
          cinco={parseInt(Math.random() * (10) + 51)}
          um1={parseInt(Math.random() * (10) + 11)}
          dois2={parseInt(Math.random() * (10) + 21)}
          tres3={parseInt(Math.random() * (10) + 31)}
          quatro4={parseInt(Math.random() * (10) + 41)}
          cinco5={parseInt(Math.random() * (10) + 51)}
        />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 8,
    paddingTop: 100,
    alignContent: "space-between",
    backgroundColor: 'lightgray'    
  }
});