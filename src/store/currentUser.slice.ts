import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../models/user';
//import { User } from '../models/User';

interface CurrentUserState {
  userInfo?: User;
}

const initialState: CurrentUserState = {
  userInfo: undefined,
};

interface LoginUserPayload {
  user: User;
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: initialState,
  reducers: {
    logIn: (state, action: PayloadAction<LoginUserPayload>) => {
      state.userInfo = action.payload.user;
    },
    logOut: (state) => {
      state.userInfo = undefined;
    },
  },
});

export const { logIn, logOut } = currentUserSlice.actions;

export const currentUserReducer = currentUserSlice.reducer;