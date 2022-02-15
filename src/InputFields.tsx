import * as React from "react";
import { Button } from "@chakra-ui/react";
import { Input, Stack, Text, Select } from "@chakra-ui/react";
import { QueryParams } from "./types";
import { shouldUseInputFields } from "./oppgave2";

type InputFieldsProps = {
  onFetchTilsyn: (queryParams: QueryParams) => void;
};

export const InputFields = (props: InputFieldsProps) => {
  const [postnummer, setPostnummer] = React.useState<string>("");
  const [poststed, setPoststed] = React.useState<string>();
  const [smilefjes, setSmilefjes] = React.useState<string>();

  return (
    <Stack spacing={3} paddingBottom={12}>
      {shouldUseInputFields && (
        <>
          <Input
            value={postnummer}
            onChange={(event) => {
              setPostnummer(event.target.value);
            }}
            placeholder="Postnummer"
            size="lg"
          />
          <Select
            onChange={(event) => {
              setPoststed(event.target.value);
            }}
            placeholder="Poststed"
          >
            <option value="TRONDHEIM">Trondheim</option>
            <option value="OSLO">Oslo</option>
            <option value="BERGEN">Bergen</option>
          </Select>
          <Select
            onChange={(event) => {
              setSmilefjes(event.target.value);
            }}
            placeholder="Smilefjes"
          >
            <option value="BLID">Blid</option>
            <option value="NØYTRAL">Nøytral</option>
            <option value="SUR">Sur</option>
          </Select>
        </>
      )}
      <Button
        marginBottom={12}
        onClick={() => props.onFetchTilsyn({ postnummer, poststed, smilefjes })}
      >
        <Text> Hent tilsyn</Text>
      </Button>
    </Stack>
  );
};
