import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
const Item = ({ task, id, userData, deleteJob }) => {
  const [checkBox, setCheckBox] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#DEE1E62B',
        marginVertical: 10,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      }}>
      <View>
        <CheckBox
          onPress={() => setCheckBox(!checkBox)}
          checked={checkBox}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
          size={30}
          containerStyle={{ backgroundColor: '#DEE1E62B' }}
        />
      </View>
      <View style={{ width: 160 }}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>{task}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => deleteJob(id)}>
          <AntDesign name="edit" style={{ color: 'black' }} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DetailJob = ({ navigation, route }) => {
  const { user: initialRouteName } = route.params;
  const [userData, setUserData] = useState(initialRouteName);

  const deleteJob = async (id) => {
    try {
      // Lấy toàn bộ dữ liệu người dùng trước
      const response = await fetch(`https://670955e3af1a3998baa13006.mockapi.io/users/${userData.id}`);
      const fetchedUserData = await response.json();

      // Lọc danh sách todos để loại bỏ công việc có id cần xóa
      const updatedTodos = fetchedUserData.todos.filter((item) => item.id !== id);

      // Gửi yêu cầu PUT để cập nhật lại danh sách todos của người dùng
      const updateResponse = await fetch(`https://670955e3af1a3998baa13006.mockapi.io/users/${userData.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todos: updatedTodos,
        }),
      });

      if (updateResponse.ok) {
        // Cập nhật lại state userData
        setUserData({ ...userData, todos: updatedTodos });
        console.log('Job deleted successfully');
      } else {
        console.error('Failed to delete job');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 5,
          marginTop: 30,
          borderWidth: 1,
          width: '90%',
          height: 35,
          borderColor: 'gray',
          padding: 10,
        }}>
        <Icon name="search" size={20} style={{ alignSelf: 'center' }} color={'gray'} />
        <TextInput
          style={{
            width: '90%',
            height: 30,
            marginHorizontal: 10,
            alignSelf: 'center',
          }}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>
      <View style={{ height: '60%', marginVertical: 30 }}>
        <FlatList
          data={userData.todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item task={item.task} id={item.id} userData={userData} deleteJob={deleteJob} />
          )}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00BDD6',
            borderRadius: '50%',
            width: 69,
            height: 69,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('AddJob', { user: userData })}>
          <Icon name="plus" size={50} color={'white'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailJob;

