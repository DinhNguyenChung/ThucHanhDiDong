// ReduxToolkits/counterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Tạo async thunk để fetch tất cả người dùng
export const fetchAllUsers = createAsyncThunk(
  'counter/fetchAllUsers',
  async () => {
    const response = await fetch(
      'https://670955e3af1a3998baa13006.mockapi.io/users'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data; // Trả về danh sách người dùng
  }
);

// Tạo async thunk để fetch dữ liệu
export const fetchData = createAsyncThunk(
  'counter/fetchData',
  async (userId) => {
    const response = await fetch(
      `https://670955e3af1a3998baa13006.mockapi.io/users/${userId}`
    );
    if (!response.ok) throw new Error('Failed to fetch user data');
    const data = await response.json();
    return data; // Trả về dữ liệu của người dùng
  }
);

// Tạo async thunk để thêm task
export const addTask = createAsyncThunk(
  'counter/addTask',
  async ({ userId, task }) => {
    const response = await fetch(
      `https://670955e3af1a3998baa13006.mockapi.io/users/${userId}`
    );
    const fetchedUserData = await response.json();

    const updatedTodos = [...fetchedUserData.todos, task];

    const updateResponse = await fetch(
      `https://670955e3af1a3998baa13006.mockapi.io/users/${userId}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todos: updatedTodos,
        }),
      }
    );

    if (updateResponse.ok) {
      return updatedTodos; // Trả về danh sách todos đã cập nhật
    }
    throw new Error('Failed to add task');
  }
);

// Tạo async thunk để chỉnh sửa task
export const editTask = createAsyncThunk(
  'counter/editTask',
  async ({ userId, taskId, updatedTask }) => {
    const response = await fetch(
      `https://670955e3af1a3998baa13006.mockapi.io/users/${userId}`
    );
    const fetchedUserData = await response.json();

    const updatedTodos = fetchedUserData.todos.map((item) => {
      if (item.id === taskId) {
        return { ...item, task: updatedTask };
      }
      return item;
    });

    const updateResponse = await fetch(
      `https://670955e3af1a3998baa13006.mockapi.io/users/${userId}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todos: updatedTodos,
        }),
      }
    );

    if (updateResponse.ok) {
      return updatedTodos; // Trả về danh sách todos đã cập nhật
    }
    throw new Error('Failed to edit task');
  }
);

// Tạo async thunk để xóa task
export const deleteTask = createAsyncThunk(
  'counter/deleteTask',
  async ({ userId, taskId }) => {
    const response = await fetch(
      `https://670955e3af1a3998baa13006.mockapi.io/users/${userId}`
    );
    const fetchedUserData = await response.json();

    const updatedTodos = fetchedUserData.todos.filter(
      (item) => item.id !== taskId
    );

    const updateResponse = await fetch(
      `https://670955e3af1a3998baa13006.mockapi.io/users/${userId}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todos: updatedTodos,
        }),
      }
    );

    if (updateResponse.ok) {
      return updatedTodos; // Trả về danh sách todos đã cập nhật
    }
    throw new Error('Failed to delete task');
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    users: [],
    currentUser: null, // Lưu currentUser ở đây
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true; // Bắt đầu loading
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false; // Kết thúc loading
        state.users = action.payload; // Cập nhật danh sách người dùng
        state.currentUser = action.payload[0] || null; // Lưu currentUser
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false; // Kết thúc loading
        state.error = action.error.message; // Lưu lỗi
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.currentUser = action.payload; // Cập nhật currentUser
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message; // Lưu lỗi
      });
    // ... Xử lý các trường hợp khác cho addTask, editTask, deleteTask
  },
});

export default counterSlice.reducer;
