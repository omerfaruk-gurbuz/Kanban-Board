import { configureStore, createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: [],
  reducers: {
    addBoard: (state, action) => {
      state.push(action.payload);
    },
  },
});

const cardSlice = createSlice({
  name: 'card',
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
    card: cardSlice.reducer,
  },
});

export const { addBoard } = boardSlice.actions;
export const { addCard } = cardSlice.actions;
