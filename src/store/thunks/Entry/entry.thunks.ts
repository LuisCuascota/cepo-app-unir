import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  EntryCount,
  EntryOption,
  NewEntryComplete,
} from "../../interfaces/Entry/entry.interfaces";
import { entryOptionsMock, newEntriesMock } from "./entry.mock";

export const getEntryOptionList = createAsyncThunk<EntryOption[], number>(
  "entry/option",
  async () => {
    return entryOptionsMock;
  }
);

export const getEntryCount = createAsyncThunk<EntryCount>(
  "entry/count",
  async () => {
    return { count: newEntriesMock.length + 1 };
  }
);

export const postNewEntry = createAsyncThunk<
  NewEntryComplete,
  NewEntryComplete
>("entry/new", async (payload: NewEntryComplete) => {
  return payload;
});

export const deleteEntry = createAsyncThunk<NewEntryComplete[], number>(
  "entry/delete",
  async (id: number) => {
    const index = newEntriesMock.findIndex(
      (entry) => entry.header.number === id
    );

    newEntriesMock.splice(index, 1);

    return newEntriesMock;
  }
);
