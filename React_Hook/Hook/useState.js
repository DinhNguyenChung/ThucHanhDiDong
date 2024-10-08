import React, { useState } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

const CounterApp = () => {
  // Declare a state variable called "count", initially set to 0
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </SafeAreaView>
  );
};

export default CounterApp;
