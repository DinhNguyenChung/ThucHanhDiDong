import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header, Icon, Input } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
const data = [
  {
    id: "1",
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/giacchuyen 1.png"),
  },
  {
    id: "2",
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/daynguon 1.png"),
  },
  {
    id: "3",
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/dauchuyendoipsps2 1.png"),
  },
  {
    id: "4",
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/dauchuyendoi 1.png"),
  },
  {
    id: "5",
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/daucam 1.png"),
  },
  {
    id: "6",
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/carbusbtops2 1.png"),
  },
];
import PropTypes from "prop-types";
// type item = {
//   title: string;
//   rating: any;
//   price: string;
//   discount: string;
//   img: any;
// };
const Item = ({ title, rating, price, discount, img }) => {
  return (
    <View
      style={{ height: "100%", width: "50%", paddingVertical: 10, padding: 5 }}
    >
      <Image source={img} style={{ width: "100%", height: 100 }} />
      <View
        style={{
          // hidden
          overflow: "hidden",
          width: "65%",
        }}
      >
        <Text style={{ paddingLeft: 10 }}>{title}</Text>
      </View>
      <Image
        source={rating}
        style={{ width: "50%", height: 10, paddingHorizontal: 10 }}
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ padding: 10, fontWeight: "800" }}>{price}</Text>
        <Text style={{ padding: 10 }}>{discount}</Text>
      </View>
    </View>
  );
};
const SCreenDayCapUSB = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ ...styles.headerContainer }}>
          <View>
            <TouchableOpacity>
              <MaterialIcons name="arrow-back" size={25} color={"white"} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "50%",
            }}
          >
            <TouchableOpacity>
              <Icon name="search" size={30} />
            </TouchableOpacity>
            <TextInput
              placeholder="Dây cáp usb"
              style={{ backgroundColor: "#fff" }}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "red",
                  borderRadius: 50,
                  position: "absolute",
                  zIndex: 1,
                  marginLeft: "60%",
                }}
              ></View>
              <Icon name="shopping-cart" size={25} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="more-horiz" size={25} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                rating={item.rating}
                price={item.price}
                img={item.img}
                discount={item.discount}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2} // Đặt số cột là 2
            key={(2).toString()} // Đặt key cho FlatList, dựa trên số cột
            columnWrapperStyle={{ justifyContent: "space-between" }} // Căn đều các item
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default SCreenDayCapUSB;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "cyan",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
});
Item.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.any.isRequired,
  price: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
};
