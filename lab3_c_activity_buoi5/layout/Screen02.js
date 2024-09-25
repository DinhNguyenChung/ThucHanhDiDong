import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import { Icon, Button } from "react-native-elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Screen01({ navigation, route }) {
  const [selectedColor, setlectedColor] = useState("blue");
  const handleSelector = (color) => {
    setlectedColor(color);
  };
  const handleComplete = () => {
    if (setlectedColor) {
      if (route.params.setPhoneColor) {
        route.params.setPhoneColor(setlectedColor);
      }

      navigation.navigate("Screen01", { selectedColor });
    }
  };
  const phoneImages = {
    blue: require("../pic/vs_blue.png"),
    red: require("../pic/vs_red.png"),
    black: require("../pic/vs_black.png"),
    silver: require("../pic/vs_silver.png"),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={phoneImages[selectedColor]}
          style={{
            width: 100,
            height: 122,
          }}
        />
        <View>
          <Text>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
        </View>
      </View>
      <View>
        <Text>Chọn một màu bên dưới:</Text>
        <View style={{ alignItems: "center" }}>
          <Button
            buttonStyle={{
              backgroundColor: "#C5F1FB",
              width: 80,
              height: 85,
              marginTop: 10,
            }}
            onPress={() => handleSelector("blue")}
          />
          <Button
            buttonStyle={{
              backgroundColor: "#F30D0D",
              width: 80,
              height: 85,
              marginTop: 10,
            }}
            onPress={() => handleSelector("red")}
          />
          <Button
            buttonStyle={{
              backgroundColor: "#000000",
              width: 80,
              height: 85,
              marginTop: 10,
            }}
            onPress={() => handleSelector("black")}
          />
          <Button
            buttonStyle={{
              backgroundColor: "#234896",
              width: 80,
              height: 85,
              marginTop: 10,
            }}
            onPress={() => handleSelector("silver")}
          />
        </View>
        <View style={{}}>
          <Button
            buttonStyle={{
              marginTop: 10,
              height: 44,
              width: "80%",
              alignSelf: "center",
            }}
            title="XONG"
            onPress={handleComplete}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ecf0f1",
    padding: 8,
    margin: 10,
  },
});
