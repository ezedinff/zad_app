import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authSaga } from './saga';
import { AuthState, User } from './types';
interface Credentials{
  username: string;
  password: string;
}
export const initialState: AuthState = {
  loading: false,
  user: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state, action: PayloadAction<Credentials>) {
      state.loading = true;
    },
    authenticated(state, action: PayloadAction<User>) {
      state.loading = false;
      state.user = action.payload;
    }
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
