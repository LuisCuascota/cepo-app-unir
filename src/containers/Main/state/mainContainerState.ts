import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { deleteEntry } from "../../../store/thunks/Entry/entry.thunks";
import { useState } from "react";

export const mainContainerState = () => {
  const dispatch = useAppDispatch();
  const { newEntries } = useAppSelector((state) => ({
    ...state.entry,
  }));
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onDeleteEntry = (id: number) => {
    dispatch(deleteEntry(id));
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };
  const onOpenModal = () => {
    setOpenModal(true);
  };

  return {
    entries: newEntries,
    onCloseModal,
    onDeleteEntry,
    onOpenModal,
    openModal,
  };
};
