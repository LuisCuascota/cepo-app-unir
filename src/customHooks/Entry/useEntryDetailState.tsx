import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FetchStateEnum } from "../../shared/enums/fetchState.enum";
import { EntryOption } from "../../store/interfaces/Entry/entry.interfaces";
import {
  setDisableSave,
  setOptionsValue,
} from "../../store/actions/Entry/entry.actions";
import { EntryTypeEnum } from "../../shared/enums/entryType.enum";
import { UseEntryDetailStateInterfaces } from "./useEntryDetailState.interfaces";

export const useEntryDetailState = (): UseEntryDetailStateInterfaces => {
  const dispatch = useAppDispatch();
  const { getOptionsStatus, options } = useAppSelector((state) => ({
    ...state.entry,
  }));
  const [entryOptions, setEntryOptions] = useState<EntryOption[]>([]);
  const [isOpenLoanModal, setOpenLoanModal] = useState<boolean>(false);

  const onItemChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedOptions: EntryOption[] = options.map(
      (option: EntryOption) => ({
        description: option.description,
        id: option.id,
        showDetails: option.showDetails,
        value:
          option.id.toString() === event.target.id
            ? +event.target.value
            : option.value
            ? option.value
            : 0,
      })
    );

    dispatch(setOptionsValue(updatedOptions));
  };

  const onVisualisation = (type: EntryTypeEnum) => {
    if (type == EntryTypeEnum.LOAN_FEE) {
      setOpenLoanModal(true);
    }
  };

  const onCloseLoanModal = () => {
    setOpenLoanModal(false);
  };

  useEffect(() => {
    if (getOptionsStatus === FetchStateEnum.SUCCESS) {
      setEntryOptions(options);
      dispatch(setDisableSave(false));
    }
  }, [options]);

  return {
    entryOptions,
    isOpenLoanModal,
    onCloseLoanModal,
    onItemChange,
    onVisualisation,
  };
};
