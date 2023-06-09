import { Autocomplete, TextField } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { PersonData } from "../../../store/interfaces/Person/person.interfaces";
import { SyntheticEvent, useEffect, useState } from "react";
import { FetchStateEnum } from "../../../shared/enums/fetchState.enum";

export interface SelectorPerson {
  label: string;
  id: number;
}

export interface PersonSearchParams {
  disableSearch: boolean;
  onChangeSelector: (id: number) => void;
}

export const PersonSearch = (props: PersonSearchParams) => {
  const [personList, setPersonList] = useState<SelectorPerson[]>([]);

  const {
    person: { getPersonsStatus, persons },
  } = useAppSelector((state) => state);

  const buildSelector = () => {
    setPersonList(
      persons.map((person: PersonData) => ({
        id: person.number ? person.number : 0,
        label: `${person.number ? person.number : 0}-${person.names} ${
          person.surnames
        }`,
      }))
    );
  };

  const onChangeSelector = (
    _event: SyntheticEvent,
    value: SelectorPerson | null
  ): void => {
    if (value) {
      props.onChangeSelector(value.id);
    }
  };

  useEffect(() => {
    if (getPersonsStatus === FetchStateEnum.SUCCESS) buildSelector();
  }, [getPersonsStatus]);

  return (
    <Autocomplete
      disabled={props.disableSearch}
      options={personList}
      renderInput={(params) => (
        <TextField {...params} size={"small"} label={"Socio"} />
      )}
      onChange={onChangeSelector}
    />
  );
};
