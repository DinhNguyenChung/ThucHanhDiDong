import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { styles } from "./styles";
import { Button, ButtonGroup, Input } from "react-native-elements";

const Tiki = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(141800);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  // Các mã giảm giá có sẵn
  const availableDiscounts = ["DISCOUNT10", "DISCOUNT20", "DISCOUNT30"];
  // Hàm chọn mã giảm giá và đóng Modal
  const selectDiscount = (code) => {
    setDiscountCode(code); // Cập nhật mã giảm giá
    setModalVisible(false); // Đóng Modal ngay sau khi cập nhật
    calculateTotal(); // Tính lại tổng tiền sau khi chọn mã giảm giá
  };
  // Hàm xử lý tăng số lượng sản phẩm
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Hàm xử lý giảm số lượng sản phẩm
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Tính tổng giá trị tạm tính
  const subTotal = quantity * price;
  // Hàm tính thành tiền sau khi áp dụng mã giảm giá
  const calculateTotal = () => {
    let discountValue = 0;
    if (discountCode === "DISCOUNT10") {
      discountValue = 10; // Mã giảm 10%
    }
    if (discountCode === "DISCOUNT20") {
      discountValue = 20; // Mã giảm 20%
    }
    if (discountCode === "DISCOUNT30") {
      discountValue = 30; // Mã giảm 30%
    }
    setDiscount(discountValue);
    const newTotal = subTotal - (subTotal * discountValue) / 100;
    setTotal(newTotal); // Cập nhật giá trị thành tiền
    console.log("Mã giảm giá áp dụng, tổng tiền là: ", newTotal);
  };
  useEffect(() => {
    calculateTotal();
  }, [quantity, discountCode]);
  // Hàm xử lý khi nhấn nút "TIẾN HÀNH ĐẶT HÀNG"
  const handleCheckout = () => {
    // Xử lý logic đặt hàng ở đây (gửi dữ liệu đến server, v.v.)
    console.log("Đã tiến hành đặt hàng");

    // Reset lại các giá trị sau khi đặt hàng
    setQuantity(1);
    setPrice(141800);
    setDiscountCode("");
    setDiscount(0);
    setTotal(141800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <View>
          <Image source={require("../image/book.png")} />
        </View>
        <View style={styles.view1_2}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginBottom: 10,
            }}
          >
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Cung cấp bởi Tiki Trading
          </Text>
          <Text
            style={{
              color: "red",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            141.800 đ
          </Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              color: "gray",
              fontSize: 12,
            }}
          >
            200.000 đ
          </Text>
          <View style={styles.view_row}>
            <View style={[styles.view_row, { justifyContent: "space-around" }]}>
              <Button
                buttonStyle={{
                  backgroundColor: "#ffffff",
                  height: 35,
                  width: 35,
                }}
                icon={<Image source={require("../image/btnminus.png")} />}
                onPress={decreaseQuantity}
              ></Button>
              <Text>{quantity}</Text>
              <Button
                buttonStyle={{
                  backgroundColor: "#ffffff",
                  height: 35,
                  width: 35,
                }}
                icon={<Image source={require("../image/btnadd.png")} />}
                onPress={increaseQuantity}
              ></Button>
            </View>
            <View>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                  }}
                >
                  Mua sau
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <View
          style={{
            width: "70%",
          }}
        >
          <Input
            leftIcon={
              <Image
                source={require("../image/yellow_block.png")}
                style={{
                  //   width: 20,
                  //   height: 20,
                  marginLeft: 5,
                }}
              />
            }
            placeholder="DISCOUNT10 "
            inputContainerStyle={{
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              height: 40,
              width: "80%",
              backgroundColor: "#",
            }}
            value={discountCode}
            // onChangeText={setDiscountCode}
            editable={false}
          />
        </View>
        <View style={{ width: "30%" }}>
          <Button
            title={"Áp dụng"}
            buttonStyle={{
              width: "80%",
            }}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      <View style={styles.view3}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "blue",
              fontWeight: "bold",
            }}
          >
            Nhập tại đây ?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view4}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          TẠM TÍNH
        </Text>
        <Text
          style={{
            color: "red",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {subTotal.toLocaleString("vi-VN")} đ
        </Text>
      </View>
      <View style={styles.view5}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            THÀNH TIỀN
          </Text>
          <Text
            style={{
              color: "red",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {total.toLocaleString("vi-VN")} đ
          </Text>
        </View>
        <View>
          <Button
            title={"TIẾN HÀNH ĐẶT HÀNG"}
            titleStyle={{
              fontWeight: "bold",
            }}
            buttonStyle={{
              backgroundColor: "red",
              width: "90%",
              //   borderRadius: 10,
              alignSelf: "center",
              marginBottom: 10,
            }}
            onPress={handleCheckout}
          />
        </View>
      </View>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Đóng modal khi nhấn ra ngoài
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)", // Nền tối để rõ modal
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: "80%",
            }}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Chọn mã giảm giá
            </Text>

            <FlatList
              data={availableDiscounts}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => selectDiscount(item)} // Chọn mã giảm giá và đóng modal
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />

            <Button
              title="Đóng"
              onPress={() => setModalVisible(false)}
              buttonStyle={{
                backgroundColor: "red",
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Tiki;
