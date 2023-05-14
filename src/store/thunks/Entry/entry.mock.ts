import {
  EntryOption,
  NewEntryComplete,
} from "../../interfaces/Entry/entry.interfaces";

export const entryOptionsMock: EntryOption[] = [
  {
    description: "Aporte para gastos de Administración",
    id: 1,
    showDetails: false,
    value: 0,
  },
  {
    description: "Fondo desgravamen",
    id: 2,
    showDetails: false,
    value: 0,
  },
  {
    description: "Cuota capital préstamo",
    id: 3,
    showDetails: true,
    value: 0,
  },
  {
    description: "Intereses préstamo",
    id: 4,
    showDetails: false,
    value: 0,
  },
  {
    description: "Intereses mora",
    id: 5,
    showDetails: false,
    value: 0,
  },
  {
    description: "Multas atrasos de aportes",
    id: 6,
    showDetails: false,
    value: 0,
  },
  {
    description: "Multa inasistencias",
    id: 7,
    showDetails: false,
    value: 0,
  },
  {
    description: "Aportes de capital",
    id: 8,
    showDetails: false,
    value: 20,
  },
  {
    description: "Aportes fondo estratégico",
    id: 9,
    showDetails: false,
    value: 1,
  },
  {
    description: "Depósitos a plazo fijo",
    id: 10,
    showDetails: false,
    value: 0,
  },
  {
    description: "Otros ingresos",
    id: 11,
    showDetails: false,
    value: 0,
  },
];

export const newEntriesMock: NewEntryComplete[] = [];
