import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { deleteEntry } from "../../store/actions/Entry/entry.actions";

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

  console.log(newEntries);

  return {
    entries: newEntries,
    onCloseModal,
    onDeleteEntry,
    onOpenModal,
    openModal,
  };
};
