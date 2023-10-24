
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './MapScreen';


export default function App() {
  return (
    <View style={styles.container}>
     <MapScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
