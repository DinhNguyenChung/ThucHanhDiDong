import React, { createContext, useContext } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

// Create the context
const UserContext = createContext();

const App = () => {
  const user = { name: "John Doe", age: 30 };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <SafeAreaView>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
    </SafeAreaView>
  );
};
export default App;
