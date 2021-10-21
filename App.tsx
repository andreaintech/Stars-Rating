import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  }
});

export default App;