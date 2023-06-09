import { createSlice } from "@reduxjs/toolkit";
import {
  EntryOption,
  EntryState,
} from "../../interfaces/Entry/entry.interfaces";
import {
  deleteEntry,
  getEntryCount,
  getEntryOptionList,
  postNewEntry,
} from "../../thunks/Entry/entry.thunks";
import { FetchStateEnum } from "../../../shared/enums/fetchState.enum";
import { getFormattedDate } from "../../../shared/utils/date.utils";
import { newEntriesMock } from "../../thunks/Entry/entry.mock";

export const initialState: EntryState = {
  count: 0,
  disableSave: true,
  disableSearch: false,
  getEntryCountStatus: FetchStateEnum.PENDING,
  getOptionsStatus: FetchStateEnum.PENDING,
  newEntries: newEntriesMock,
  newEntry: {
    account_number: 0,
    amount: 0,
    date: getFormattedDate(),
    is_transfer: false,
    number: 0,
    place: "Loreto",
  },
  options: [],
  postNewEntryStatus: FetchStateEnum.PENDING,
};

export const entrySlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(getEntryOptionList.pending, (state: EntryState) => {
      state.getOptionsStatus = FetchStateEnum.PENDING;
    });
    builder.addCase(getEntryOptionList.fulfilled, (state, { payload }) => {
      state.getOptionsStatus = FetchStateEnum.SUCCESS;
      state.options = payload;
    });
    builder.addCase(getEntryOptionList.rejected, (state) => {
      state.getOptionsStatus = FetchStateEnum.FAILED;
    });
    builder.addCase(getEntryCount.pending, (state: EntryState) => {
      state.getEntryCountStatus = FetchStateEnum.PENDING;
    });
    builder.addCase(getEntryCount.fulfilled, (state, { payload }) => {
      state.getEntryCountStatus = FetchStateEnum.SUCCESS;
      state.count = payload.count;
    });
    builder.addCase(getEntryCount.rejected, (state) => {
      state.getEntryCountStatus = FetchStateEnum.FAILED;
    });
    builder.addCase(postNewEntry.pending, (state: EntryState) => {
      state.postNewEntryStatus = FetchStateEnum.PENDING;
    });
    builder.addCase(postNewEntry.fulfilled, (state, { payload }) => {
      state.postNewEntryStatus = FetchStateEnum.SUCCESS;
      state.newEntries.push(payload);
    });
    builder.addCase(postNewEntry.rejected, (state) => {
      state.postNewEntryStatus = FetchStateEnum.FAILED;
    });
    builder.addCase(deleteEntry.fulfilled, (state, { payload }) => {
      state.newEntries = payload;
    });
  },
  initialState,
  name: "entry",
  reducers: {
    deleteEntry(state, action: { payload: number }) {
      console.log(action.payload);
      state.newEntries.splice(action.payload, 1);
    },
    setDisableSave(state, action: { payload: boolean }) {
      state.disableSave = action.payload;
    },
    setDisableSearch(state, action: { payload: boolean }) {
      state.disableSearch = action.payload;
    },
    setNewEntryAccount(state, action: { payload: number }) {
      state.newEntry.account_number = action.payload;
    },
    setNewEntryAmount(state, action: { payload: number }) {
      state.newEntry.amount = action.payload;
    },
    setNewEntryDate(state, action: { payload: string }) {
      state.newEntry.date = action.payload;
    },
    setNewEntryIsTransfer(state, action: { payload: boolean }) {
      state.newEntry.is_transfer = action.payload;
    },
    setNewEntryNumber(state, action: { payload: number }) {
      state.newEntry.number = action.payload;
    },
    setOptionsValue(state, action: { payload: EntryOption[] }) {
      state.options = action.payload;
    },
  },
});

export default entrySlice.reducer;
