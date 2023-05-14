export enum EntryTypeEnum {
  CONTRIBUTION = 1,
  RELIEF_FUND = 2,
  LOAN_FEE = 3,
  LOAN_INTEREST = 4,
  INTEREST_PENALTY = 5,
  PENALTY_ENTRY = 6,
  PENALTY_ATTENDANCE = 7,
  CAPITAL_CONTRIBUTION = 8,
  STRATEGIC_FUND = 9,
  FIXED_TERM = 10,
  OTHERS = 11,
}

export const EntryDescriptionMap = {
  [EntryTypeEnum.CONTRIBUTION]: "Aporte para gastos de Administración",
  [EntryTypeEnum.RELIEF_FUND]: "Fondo desgravamen",
  [EntryTypeEnum.LOAN_FEE]: "Cuota capital préstamo",
  [EntryTypeEnum.LOAN_INTEREST]: "Intereses préstamo",
  [EntryTypeEnum.INTEREST_PENALTY]: "Intereses mora",
  [EntryTypeEnum.PENALTY_ENTRY]: "Multas atrasos de aportes",
  [EntryTypeEnum.PENALTY_ATTENDANCE]: "Multa inasistencias",
  [EntryTypeEnum.CAPITAL_CONTRIBUTION]: "Aportes de capital",
  [EntryTypeEnum.STRATEGIC_FUND]: "Aportes fondo estratégico",
  [EntryTypeEnum.FIXED_TERM]: "Depósitos a plazo fijo",
  [EntryTypeEnum.OTHERS]: "Otros ingresos",
};
