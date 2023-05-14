import { createAsyncThunk } from "@reduxjs/toolkit";
import { PersonData } from "../../interfaces/Person/person.interfaces";
import { personsMock } from "./person.mock";

export const getPersonList = createAsyncThunk<PersonData[]>(
  "person/list",
  async () => {
    return personsMock;
  }
);
