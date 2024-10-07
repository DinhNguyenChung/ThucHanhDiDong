import React, { useState, useEffect } from "react";
import { Button, SafeAreaView } from "react-native";
export default function App() {
  const [count, setCount] = useState(0);
  const countEvery3 = Math.floor(count / 3);

  useEffect(() => {
    console.log(countEvery3);
  });
  return (
    <SafeAreaView>
      <Button
        title={`Increment ${count}`}
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </SafeAreaView>
  );
}
