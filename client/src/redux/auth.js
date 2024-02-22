import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    loading: true
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    }
  }
});

export const { setCurrentUser } = authSlice.actions;
export const selectCurrentUser = state => state.auth.currentUser;
export const selectAuthStateLoading = state => state.auth.loading;
export default authSlice.reducer;
