import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { LoanTypeEnum } from "../../../../shared/enums/loanType.enum";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { useLoanHeaderState } from "../../../../customHooks/Loan/useLoanHeaderState";
import { LoanHeaderProps } from "../../../../customHooks/Loan/LoanHeader.interfaces";
import { PersonSearch } from "../../../../components/search/personSearch/PersonSearch";
import { DatePikerInput } from "../../../../components/input/datePikerInput/DatePikerInput";

export const LoanHeader = (props: LoanHeaderProps) => {
  const {
    count,
    onChangeDate,
    onChangeMonths,
    onChangeLoanType,
    onChangeValue,
    onCalculate,
    onSaveLoan,
    onSelectGuarantor1,
    onSelectGuarantor2,
    onSelectPerson,
  } = useLoanHeaderState(props);

  return (
    <Grid container spacing={1} padding={2}>
      <Grid item md={12} textAlign={"center"}>
        <Typography>{`Creación de Crédito N${count}`}</Typography>
      </Grid>
      <Grid item md={2}>
        <Typography>{"Valor"}</Typography>
        <TextField
          type={"number"}
          size={"small"}
          defaultValue={0}
          onChange={onChangeValue}
        />
      </Grid>
      <Grid item md={2}>
        <Typography>{"Meses"}</Typography>
        <TextField
          type={"number"}
          size={"small"}
          defaultValue={0}
          onChange={onChangeMonths}
        />
      </Grid>
      <Grid item md={2}>
        <Typography>{"Tipo de Cuota"}</Typography>
        <RadioGroup
          row
          defaultValue={LoanTypeEnum.FIXED_FEE}
          onChange={onChangeLoanType}
        >
          <FormControlLabel
            value={LoanTypeEnum.FIXED_FEE}
            control={<Radio size={"small"} />}
            label="Fijo"
          />
          <FormControlLabel
            value={LoanTypeEnum.VARIABLE_FEE}
            control={<Radio size={"small"} />}
            label="Variable"
          />
        </RadioGroup>
      </Grid>
      <Grid item md={2}>
        <Typography>{"Fecha"}</Typography>
        <DatePikerInput onChangeDate={onChangeDate} />
      </Grid>
      <Grid item md={4}>
        <LoadingButton
          endIcon={<SaveIcon />}
          loadingPosition="end"
          variant="outlined"
          onClick={onCalculate}
        >
          <span>{"Calcular"}</span>
        </LoadingButton>
        <LoadingButton
          endIcon={<SaveIcon />}
          loadingPosition="end"
          variant="contained"
          onClick={onSaveLoan}
        >
          <span>{"Guardar"}</span>
        </LoadingButton>
      </Grid>
      <Grid item md={4}>
        <Typography>{"Deudor"}</Typography>
        <PersonSearch disableSearch={false} onChangeSelector={onSelectPerson} />
      </Grid>
      <Grid item md={4}>
        <Typography>{"Garante 1"}</Typography>
        <PersonSearch
          disableSearch={false}
          onChangeSelector={onSelectGuarantor1}
        />
      </Grid>
      <Grid item md={4}>
        <Typography>{"Garante 2"}</Typography>
        <PersonSearch
          disableSearch={false}
          onChangeSelector={onSelectGuarantor2}
        />
      </Grid>
    </Grid>
  );
};
