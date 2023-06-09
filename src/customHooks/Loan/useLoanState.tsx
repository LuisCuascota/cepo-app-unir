import { useState } from "react";
import { Loan, LoanDetail } from "../../store/interfaces/Loan/loan.interfaces";
import { useAppDispatch } from "../../store/hooks";
import { postNewLoan } from "../../store/thunks/Loan/loan.thunks";

export const useLoanState = () => {
  const dispatch = useAppDispatch();
  const [loanFees, setLoanFees] = useState<LoanDetail[]>([]);

  const onCalculate = (detail: LoanDetail[]) => {
    setLoanFees(detail);
  };

  const onSaveLoan = (loan: Loan) => {
    console.log({ detail: loanFees, loan });
    dispatch(postNewLoan({ detail: loanFees, loan }));
  };

  return { loanFees, onCalculate, onSaveLoan };
};
