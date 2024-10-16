import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React,{useState} from 'react'

const AddJob = ({navigation,route}) => {
  const {user} = route.params ||{}
  const [JobName,setJobName] = useState('')
  const addJob = async () => {
        try {
            const response = await fetch(`https://670955e3af1a3998baa13006.mockapi.io/users/${user.id}`,{
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todos: [...user.todos,{id:Math.random(),task:JobName}]
                })
            })
            const responseJson = await response.json();
            console.log(responseJson);
        }
        catch(error) {
            console.log(error);
        }
    }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent:'space-between' }}>
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <View>
          <Image source={require('../pic/Rectangle.png')} />
        </View>
        <View>
         {/* Kiểm tra nếu user tồn tại trước khi hiển thị tên */}
          {user ? (
            <>
              <Text style={{ fontWeight: 'bold' }}>Hi {user.name}</Text>
              <Text>Have a great day ahead</Text>
            </>
          ) : (
            <Text>User not found</Text>
          )}
         
        </View>
        <View>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Icon name="arrow-left" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 30, alignSelf: 'center' }}>
          ADD YOUR JOB
        </Text>
        <View
          style={{
            borderWidth: 1,
            width: '80%',
            height: 30,
            alignSelf: 'center',
            borderColor: 'gray',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginVertical:30
          }}>
          <Icon name="list" size={20} color={'green'} />
          <TextInput
            style={{ height: 30, width: '100%', paddingLeft: 5 ,}}
            placeholderTextColor={'gray'}
            placeholder={'Input your job'}
            onChangeText={(text)=>setJobName(text)}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#00BDD6',
            alignItems: 'center',
            width: 130,
            alignSelf: 'center',
            height: 40,
            borderRadius: 10,
            justifyContent:'center'
          }}
          onPress={()=>{
            addJob(),
             navigation.popToTop()
          }}
          >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>FISNISH -></Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom:30, alignItems:'center'}}>
      <Image source={require('../pic/Image95.png')} style={{width:190, height:190}}/>
      </View>
      
    </SafeAreaView>
  );
};

export default AddJob;
