import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { searchPhrase: [] },
  reducers: {
    setSearchParams(state, action) {
      state.searchPhrase = action.payload;
    },

    setSearchHandler(state, action) {
      let inputs;

      if (state.searchPhrase.length === 0) {
        inputs = [];
      }

      if (action.payload === '') {
        return;
      }

      if (
        state.searchPhrase
          .map((item) => item.toString().toLowerCase())
          .includes(action.payload.toLowerCase())
      ) {
        return;
      }

      inputs = [...state.searchPhrase];

      inputs.push(action.payload);
      state.searchPhrase = inputs;
    },

    setClearPhrases(state) {
      state.searchPhrase = [];
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
