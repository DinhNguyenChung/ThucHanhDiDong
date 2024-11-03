import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import { CheckBox } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, fetchData, addTask, editTask, deleteTask } from './ReduxToolkits/counterSlice';

const Item = ({ task, id, editJob, deleteJob }) => {
  const [checkBox, setCheckBox] = useState(false);
  return (
    <View>
      <View style={styles.itemContainer}>
        <CheckBox
          onPress={() => setCheckBox(!checkBox)}
          checked={checkBox}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon="checkbox-blank-outline"
          size={30}
          containerStyle={{ backgroundColor: '#DEE1E62B' }}
        />
        <Text style={styles.taskText}>{task}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={() => editJob(id)}>
            <AntDesign name="edit" style={styles.icon} size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteJob(id)}>
            <AntDesign name="delete" style={styles.icon} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Counter = () => {
  const dispatch = useDispatch();
  const { users, currentUser, loading, error } = useSelector((state) => state.counter);
  const [taskInput, setTaskInput] = useState('');
  const [editId, setEditId] = useState(null);



  useEffect(() => {
    dispatch(fetchAllUsers()); // Fetch all users khi component mount
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      // Fetch user data nếu currentUser có dữ liệu
      dispatch(fetchData(currentUser.id));
    }
  }, [currentUser, dispatch]);

 
  const handleAddTask = () => {
    if (taskInput.trim()) {
      const newTask = { id: Math.random().toString(), task: taskInput };
      dispatch(addTask({ userId: currentUser.id, task: newTask }));
      setTaskInput('');
    }
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = currentUser.todos.find(task => task.id === taskId);
    setTaskInput(taskToEdit.task); // Đặt nội dung vào ô input để chỉnh sửa
    setEditId(taskId); // Lưu lại ID để có thể cập nhật sau
  };

  const handleUpdateTask = () => {
    if (editId && taskInput.trim()) {
      const updatedTask = taskInput;
      dispatch(editTask({ userId: currentUser.id, taskId: editId, updatedTask }));
      setTaskInput(''); // Xóa nội dung ô input
      setEditId(null); // Reset editId sau khi cập nhật
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ userId: currentUser.id, taskId }));
  };


  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter task"
        value={taskInput}
        onChangeText={setTaskInput}
        style={styles.input}
      />
      <Button title={editId ? "Update Task" : "Add Task"} onPress={editId ? handleUpdateTask : handleAddTask} />
      <FlatList
        data={currentUser?.todos || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Item task={item.task} id={item.id} editJob={handleEditTask} deleteJob={handleDeleteTask} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default Counter;
