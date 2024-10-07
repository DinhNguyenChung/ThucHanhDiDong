import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { Button, Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
const DATA = [
  {
    id: "1",
    title: "Ca nấu lẩu,nấu mì mini",
    shop: "DeVang",
    img: require("../pic/ca_nau_lau.png"),
  },
  {
    id: "2",
    title: "1 KG GÀ BƠ TỎI",
    shop: "LTD Food",
    img: require("../pic/ga_bo_toi.png"),
  },
  {
    id: "3",
    title: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
    img: require("../pic/xa_can_cau.png"),
  },
  {
    id: "6",
    title: "Đồ chơi dạng mô hình",
    shop: "Thế giới đồ chơi",
    img: require("../pic/do_choi_dang_mo_hinh.png"),
  },
  {
    id: "4",
    title: "Lãnh đạo giản đơn",
    shop: "Minh Long Book",
    img: require("../pic/lanh_dao_gian_don.png"),
  },
  {
    id: "5",
    title: "Hiểu lòng con trẻ",
    shop: "Minh Long Book",
    img: require("../pic/hieu_long_con_tre.png"),
  },
];

import PropTypes from "prop-types";

const Item = ({ title, img, shop }) => (
  <View style={styles.item}>
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        // backgroundColor: "gray",
      }}
    >
      <Image source={img} style={styles.image} />
    </View>
    <View style={{ width: 180, paddingHorizontal: 10 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>
        shop: <Text style={{ color: "red" }}>{shop}</Text>
      </Text>
    </View>
    <View
      style={{
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Button
        title="CHAT"
        buttonStyle={styles.button}
        titleStyle={styles.titleStyle}
      />
    </View>
  </View>
);

const ScreenChat = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header
          leftComponent={
            <Icon
              name="arrow-back"
              type="material"
              color="#fff"
              onPress={() => {}}
            />
          }
          centerComponent={{
            text: "Chat",
            style: { color: "#fff", fontSize: 18, fontWeight: "bold" },
          }}
          rightComponent={
            <Icon
              name="shopping-cart"
              type="material"
              color="#fff"
              onPress={() => {}}
            />
          }
          containerStyle={{
            ...styles.headerContainer,
            // height: 60,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            paddingVertical: 10,
            // flex: 1,
          }}
        />

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} img={item.img} shop={item.shop} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  headerContainer: {
    backgroundColor: "#1BA9FF",
  },
  containerTitle: {
    flex: 1,
    justifyContent: "space-around",
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    flex: 1,
    // justifyContent: "space-between",
  },
  title: {
    // fontSize: 32,
  },
  image: {
    width: 74,
    height: 74,
  },
  button: {
    width: 88,
    height: 38,
    backgroundColor: "#F31111",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

Item.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  shop: PropTypes.string.isRequired,
};

export default ScreenChat;
