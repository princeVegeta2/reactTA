// src/features/users/usersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../services/api';

// User structure
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

// UsersState structure
interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// Thunk to fetch users asynchronously
export const fetchAllUsers = createAsyncThunk('users/fetchAll', async () => {
  const response = await fetchUsers();
  return response;
});

// Slice to be exported
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Not needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default usersSlice.reducer;
