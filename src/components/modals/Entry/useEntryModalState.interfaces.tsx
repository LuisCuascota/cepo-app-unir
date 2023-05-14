import { NewEntryComplete } from "../../../store/interfaces/Entry/entry.interfaces";

export interface EntryModalProps {
  open: boolean;
  handleClose: () => void;
  entry: NewEntryComplete;
}
