import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Modal {
  WALLET = 'WALLET',
}

export type ModalState = {
  [key in Modal]: boolean;
};

const generateInitialState = (): ModalState => ({
  [Modal.WALLET]: false,
});

const initialState = generateInitialState();

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    set: (
      state: ModalState,
      action: PayloadAction<{ key: Modal; value: boolean }>,
    ) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

// Reducer
export default modalSlice.reducer;

// Actions
export const { set } = modalSlice.actions;
