import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Data {
  key: string;
  value: number;
}

interface DataState {
  selectedKey: string;
  data: Data[];
}

const initialState: DataState = {
  selectedKey: '',
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSelectedKey(state, action: PayloadAction<string>) {
      state.selectedKey = action.payload;
    },
    addObject(state, action: PayloadAction<Data>) {
      state.data.push(action.payload);
    },
  },
});

export const { setSelectedKey, addObject } = dataSlice.actions;
export default dataSlice.reducer;