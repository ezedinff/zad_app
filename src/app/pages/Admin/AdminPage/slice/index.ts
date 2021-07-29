import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { adminSaga } from './saga';
import { AdminState } from './types';
interface LoadPayload {
  stateIndex: string;
}
interface LoadSuccessPayload {
  stateIndex: string;
  data: any;
}
interface CreatePayload {
  stateIndex: string;
  data: any;
}
interface UpdatePayload {
  stateIndex: string;
  data: any;
  id: number;
}
interface DeletePayload {
  stateIndex: string;
  id: number;
}
export const initialState: AdminState = {
  loading: false,
  products: [],
  'product-ingredients': [],
  expenses: [],
  sales: []
};

const slice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    getAll(state, action: PayloadAction<LoadPayload>) {
      state.loading = true;
    },
    getAllSuccess(state, action: PayloadAction<LoadSuccessPayload>) {
      console.log(action);
      state[action.payload.stateIndex] = action.payload.data;
      state.loading = false;
    },
    create(state, action: PayloadAction<CreatePayload>) {
      state.loading = true;
    },
    update(state, action: PayloadAction<UpdatePayload>) {
      state.loading = true;
    },
    delete(state, action: PayloadAction<DeletePayload>) {
      state.loading = true;
    },
  },
});

export const { actions: adminActions } = slice;

export const useAdminSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: adminSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAdminSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
