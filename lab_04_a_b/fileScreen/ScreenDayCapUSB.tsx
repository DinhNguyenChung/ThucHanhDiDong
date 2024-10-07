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
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/giacchuyen 1.png"),
  },
  {
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/daynguon 1.png"),
  },
  {
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/dauchuyendoipsps2 1.png"),
  },
  {
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/dauchuyendoi 1.png"),
  },
  {
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/daucam 1.png"),
  },
  {
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    rating: require("../pic/4b/Group 4.png"),
    price: "69.900",
    discount: "39%",
    img: require("../pic/4b/carbusbtops2 1.png"),
  },
];
type item = {
  title: string;
  rating: any;
  price: string;
  discount: string;
  img: any;
};
const renderItem = ({ title, rating, price, discount, img }: item) => {
  <View></View>;
};
const SCreenDayCapUSB = () => {
  return (
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
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
    </SafeAreaView>
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
