import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoanCount, LoanResponse } from "../../interfaces/Loan/loan.interfaces";
import { loanMock, newLoansMock } from "./loan.mock";

export const getLoanByAccount = createAsyncThunk<LoanResponse, number>(
  "loan/detail",
  async () => {
    return loanMock;
  }
);

export const getLoanCount = createAsyncThunk<LoanCount>(
  "loan/count",
  async () => {
    return { count: newLoansMock.length + 1 };
  }
);

export const postNewLoan = createAsyncThunk<string, LoanResponse>(
  "loan/new",
  async (payload: LoanResponse) => {
    newLoansMock.push(payload);

    return "ok";
  }
);
