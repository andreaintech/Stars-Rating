import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {

  const Star = () => {
    return (
      <AntDesign
        name="star"
        color="#7F00FF"
        size={35}
        onPress={() => { }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Star />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;