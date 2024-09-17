import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Button, CheckBox, Input } from "react-native-elements";
import CheckBoxIcon from "react-native-elements/dist/checkbox/CheckBoxIcon";

const GeneratorPass = () => {
  const [isSelectedNumber, setSelectionNumber] = useState(false);
  const [isSelectedLowerCase, setSelectionLowerCase] = useState(false);
  const [isSelectedUpCase, setSelectionUpCase] = useState(false);
  const [isSelectedSymbol, setSelectionSymbol] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8); // Đặt độ dài mặc định
  const generatePassword = () => {
    let chars = "";
    if (isSelectedLowerCase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (isSelectedUpCase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (isSelectedNumber) {
      chars += "0123456789";
    }
    if (isSelectedSymbol) {
      chars += "!@#$%^&*()_+[]{}|;:',.<>?";
    }

    // Nếu không có lựa chọn nào thì không thể tạo mật khẩu
    if (chars === "") {
      alert("Please select at least one character type!");
      return;
    }

    // Tạo mật khẩu ngẫu nhiên dựa trên độ dài và các ký tự đã chọn
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "gray" }]}>
      <View style={styles.form}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          PASSWORD GENERATOR
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
            borderRadius: 10,
            color: "#ffffff",
          }}
          value={password}
          editable={false}
        />
        <View style={styles.form_view1}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#ffffff",
              alignSelf: "center",
            }}
          >
            Password length
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              color: "#ffffff",
              borderRadius: 10,
              width: "40%",
            }}
            keyboardType="numeric"
            value={String(passwordLength)}
            onChangeText={(text) => setPasswordLength(Number(text))}
          />
        </View>
        <View style={styles.form_view2}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#ffffff",
              alignSelf: "center",
            }}
          >
            Include lower case letters
          </Text>
          <CheckBox
            // title={"Include lower case letters"}
            checked={isSelectedLowerCase}
            onPress={() => setSelectionLowerCase(!isSelectedLowerCase)}
            // checkedIcon="dot-circle-o" // Biểu tượng cho checkbox khi đã được check
            // uncheckedIcon="circle-o" // Biểu tượng cho checkbox khi chưa check
            iconType="font-awesome" // Loại biểu tượng từ font-awesome
            size={30}
            containerStyle={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          />
        </View>
        <View style={styles.form_view2}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#ffffff",
              alignSelf: "center",
            }}
          >
            Include upcase letters
          </Text>
          <CheckBox
            // title={"Include lower case letters"}
            checked={isSelectedUpCase}
            onPress={() => setSelectionUpCase(!isSelectedUpCase)}
            // checkedIcon="dot-circle-o" // Biểu tượng cho checkbox khi đã được check
            // uncheckedIcon="circle-o" // Biểu tượng cho checkbox khi chưa check
            iconType="font-awesome" // Loại biểu tượng từ font-awesome
            size={30}
            containerStyle={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          />
        </View>
        <View style={styles.form_view2}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#ffffff",
              alignSelf: "center",
            }}
          >
            Include number
          </Text>
          <CheckBox
            // title={"Include lower case letters"}
            checked={isSelectedNumber}
            onPress={() => setSelectionNumber(!isSelectedNumber)}
            // checkedIcon="dot-circle-o" // Biểu tượng cho checkbox khi đã được check
            // uncheckedIcon="circle-o" // Biểu tượng cho checkbox khi chưa check
            iconType="font-awesome" // Loại biểu tượng từ font-awesome
            size={30}
            containerStyle={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          />
        </View>
        <View style={styles.form_view2}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#ffffff",
              alignSelf: "center",
            }}
          >
            Include special symbol
          </Text>
          <CheckBox
            // title={"Include lower case letters"}
            checked={isSelectedSymbol}
            onPress={() => setSelectionSymbol(!isSelectedSymbol)}
            // checkedIcon="dot-circle-o" // Biểu tượng cho checkbox khi đã được check
            // uncheckedIcon="circle-o" // Biểu tượng cho checkbox khi chưa check
            iconType="font-awesome" // Loại biểu tượng từ font-awesome
            size={30}
            containerStyle={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          />
        </View>
        <Button
          title={"GENERATE PASSWORD "}
          buttonStyle={{
            // backgroundColor: "#000",
            borderRadius: 10,
            marginBottom: 10,
            width: "90%",
            alignSelf: "center",
          }}
          onPress={generatePassword}
        />
      </View>
    </SafeAreaView>
  );
};

export default GeneratorPass;
