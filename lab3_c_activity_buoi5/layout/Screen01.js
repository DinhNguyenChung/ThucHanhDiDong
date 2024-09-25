import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import { Icon, Button } from "react-native-elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Screen01({ navigation, route }) {
  const [phoneColor, setPhoneColor] = useState("blue");
  // Sử dụng useEffect để theo dõi thay đổi của route.params?.selectedColor
  useEffect(() => {
    if (route.params?.selectedColor) {
      setPhoneColor(route.params.selectedColor); // Cập nhật phoneColor khi quay lại
    }
  }, [route.params?.selectedColor]);
  const phoneImages = {
    blue: require("../pic/vs_blue.png"),
    red: require("../pic/vs_red.png"),
    black: require("../pic/vs_black.png"),
    silver: require("../pic/vs_silver.png"),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.View1}>
        <Image
          source={phoneImages[phoneColor]}
          style={{
            width: 250,
            height: 300,
          }}
        />
        <Text style={{ fontSize: "15px", fontWeight: "400" }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../pic/star.png")}></Image>
            <Image source={require("../pic/star.png")}></Image>
            <Image source={require("../pic/star.png")}></Image>
            <Image source={require("../pic/star.png")}></Image>
            <Image source={require("../pic/star.png")}></Image>
          </View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>1.790.000 đ</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "gray",
              textDecorationLine: "line-through",
            }}
          >
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View style={styles.View2}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={{ color: "red", fontWeight: "bold" }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          {/* <Icon name='sc-telegram'/> */}
        </View>
        <Button
          title="4 MÀU CHỌN MÀU"
          buttonStyle={{
            backgroundColor: "while",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
          }}
          titleStyle={{ fontWeight: "bold", color: "black" }}
          onPress={() => navigation.navigate("Screen02", { setPhoneColor })}
        ></Button>
      </View>
      <View style={styles.View3}>
        <Button
          title="CHỌN MUA"
          buttonStyle={{
            backgroundColor: "red",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
          onPress={() => setPhoneColor("blue")}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  View1: {
    // backgroundColor:"yellow",
    alignContent: "center",
    alignSelf: "center",
    margin: 10,
  },
  View2: {
    //  backgroundColor:"blue",
    margin: 10,
  },
  View3: {
    //  backgroundColor:"pink",
    margin: 10,
  },
});
