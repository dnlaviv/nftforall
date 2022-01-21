import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ThemeMode {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: ThemeMode.LIGHT,
  reducers: {
    set: (state, action: PayloadAction<ThemeMode>) => {
      state = action.payload;
      return state;
    },
  },
});

// Reducer
export default themeSlice.reducer;

// Actions
export const { set } = themeSlice.actions;
