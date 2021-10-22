import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Animated,
  Easing
} from 'react-native';
import { Star } from './src/components';

const NUM_STARS = 5;

const App = () => {
  const [rating, setRating] = useState(1);
  // const [animation, setAnimation] = useState(new Animated.Value(1));
  const animatedd = new Animated.Value(1);
  const [animation, setAnimation] = useState(animatedd);
  let stars = [];
  const animateScale = animation.interpolate({
    inputRange: [1, 1.5, 2],
    outputRange: [1, 1.4, 1],
  });

  const animateOpacity = animation.interpolate({
    inputRange: [1, 1.2, 2],
    outputRange: [1, 0.5, 1],
  });

  const animateWobble = animation.interpolate({
    inputRange: [1, 1.25, 1.75, 2],
    outputRange: ["0deg", '-3deg', '3deg', '0deg'],
  });

  const rate = (star: number) => {
    setRating(star);
  }

  const animationStyle = {
    transform: [{ scale: animateScale }, { rotate: animateWobble }],
    opacity: animateOpacity
  }

  const animate = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(({ finished }) => {
      /* completion callback */
      console.log('finished: ', finished);
      animatedd.setValue(1);
    });
  }

  for (let x = 1; x <= NUM_STARS; x++) {
    stars.push(
      <TouchableWithoutFeedback
        key={x}
        onPress={() => {
          rate(x);
          animate()
        }}
      >
        <Animated.View style={x <= rating ? animationStyle : {}}>
          <Star filled={x <= rating ? true : false} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>{stars}</View>
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