import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        Hello JStack
        <Text style={styles.span}>React Native</Text>
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  span: {
    fontWeight: 'bold',
  },
});
