import {
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { mainContainerState } from "../../customHooks/Main/mainContainerState";
import { NewEntryComplete } from "../../store/interfaces/Entry/entry.interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import { Visibility } from "@mui/icons-material";
import { EntryModal } from "../../components/modals/Entry/EntryModal";
import { personsMock } from "../../store/thunks/Person/person.mock";

export const MainContainer = () => {
  const { entries, onDeleteEntry, openModal, onCloseModal, onOpenModal } =
    mainContainerState();

  const getNamesFromPersons = (account: number): string => {
    const personFinded = personsMock.find(
      (person) => person.number === account
    );

    return `${account}-${personFinded?.names} ${personFinded?.surnames}`;
  };

  return (
    <Container fixed>
      <Paper elevation={2}>
        <Typography variant={"h4"} textAlign={"center"}>
          {"APORTES DE CAPITAL"}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">{"Nro."}</TableCell>
                <TableCell align="left">{"Cuenta"}</TableCell>
                <TableCell align="left">{"Fecha"}</TableCell>
                <TableCell align="left">{"Lugar"}</TableCell>
                <TableCell align="left">{"Tipo"}</TableCell>
                <TableCell align="left">{"Valor"}</TableCell>
                <TableCell align="center">{"Acción"}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry: NewEntryComplete, index) => (
                <TableRow key={index}>
                  <EntryModal
                    open={openModal}
                    handleClose={onCloseModal}
                    entry={entry}
                  />
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {getNamesFromPersons(entry.header.account_number)}
                  </TableCell>
                  <TableCell>{entry.header.date}</TableCell>
                  <TableCell>{entry.header.place}</TableCell>
                  <TableCell>
                    {entry.header.is_transfer ? "Transferencia" : "Efectivo"}
                  </TableCell>
                  <TableCell>{entry.header.amount}</TableCell>
                  <TableCell align={"center"}>
                    <IconButton
                      aria-label="delete"
                      color={"primary"}
                      onClick={() => onOpenModal()}
                    >
                      <Visibility />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color={"error"}
                      onClick={() => onDeleteEntry(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};
