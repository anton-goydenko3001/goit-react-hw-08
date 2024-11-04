import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.error = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default slice.reducer;

export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilterContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
