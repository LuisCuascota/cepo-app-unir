import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { EntryModalProps } from "./useEntryModalState.interfaces";
import { NewEntryDetail } from "../../../store/interfaces/Entry/entry.interfaces";
import {
  EntryDescriptionMap,
  EntryTypeEnum,
} from "../../../shared/enums/entryType.enum";

export const EntryModal = (props: EntryModalProps) => {
  return (
    <Dialog maxWidth={"xl"} open={props.open} onClose={props.handleClose}>
      <DialogTitle textAlign={"center"}>{"Detalle de Aporte"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={0}>
          <Grid item md={3}>
            <Typography>{`Cod: ${props.entry.header.number}`}</Typography>
          </Grid>
          <Grid item md={5}>
            <Typography>{`Fecha: ${props.entry.header.date}`}</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography>{`Cantidad: ${props.entry.header.amount}`}</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography>{`Tipo: ${
              props.entry.header.is_transfer ? "Transferencia" : "Efectivo"
            }`}</Typography>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">{"Descripcion"}</TableCell>
                <TableCell align="left">{"Valor"}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.entry.detail.map((detail: NewEntryDetail, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {EntryDescriptionMap[detail.type_id as EntryTypeEnum]}
                  </TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>{"Cerrar"}</Button>
      </DialogActions>
    </Dialog>
  );
};
