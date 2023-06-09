import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { EntryFooterStyles } from "./EntryFooter.styles";
import { useEntryFooterState } from "../../../../customHooks/Entry/useEntryFooterState";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { DatePikerInput } from "../../../../components/input/datePikerInput/DatePikerInput";

export const EntryFooter = () => {
  const {
    onChangeDate,
    onSave,
    saveIsLoad,
    totalValue,
    disableSave,
    onCancelSave,
  } = useEntryFooterState();

  return (
    <>
      <Box sx={EntryFooterStyles.content}>
        <Box display={"flex"}>
          <Typography sx={EntryFooterStyles.labelText}>{"Fecha: "}</Typography>
          <DatePikerInput onChangeDate={onChangeDate} />
        </Box>
        <Box display={"flex"}>
          <Typography sx={EntryFooterStyles.labelText}>{"Total: "}</Typography>
          <TextField
            type={"number"}
            size={"small"}
            value={totalValue}
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box sx={EntryFooterStyles.buttonContent}>
        <Button
          sx={EntryFooterStyles.buttonCancel}
          variant={"outlined"}
          onClick={onCancelSave}
        >
          {"Cancelar"}
        </Button>
        <LoadingButton
          onClick={onSave}
          endIcon={<SaveIcon />}
          loading={saveIsLoad}
          loadingPosition="end"
          variant="contained"
          disabled={disableSave}
        >
          <span>{"Guardar Ingreso"}</span>
        </LoadingButton>
      </Box>
    </>
  );
};
