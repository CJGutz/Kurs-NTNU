import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Button,
  Box,
} from "@chakra-ui/react";
import { QueryParams, Tilsyn } from "./types";
import { mapSmilefjesToEmoji } from "./utils";
import { fetchTilsynList } from "./oppgave1";
import {
  shouldUseInputFields,
  fetchTilsynListWithQueryParams,
} from "./oppgave2";

import {
  shouldUseAccessToken,
  fetchTilsynListWitHeaderParam,
} from "./oppgave4";

import { enableDetailsLink } from "./oppgave3";

type TilsynListProps = {
  onShowTilsynDetails: (tilsynId: string) => void;
  queryParams?: QueryParams;
  shouldFetchTilsyn: boolean;
  onFetchedTilsyn: () => void;
};

export const TilsynList = ({
  onShowTilsynDetails,
  queryParams,
  shouldFetchTilsyn,
  onFetchedTilsyn,
}: TilsynListProps) => {
  const [tilsyn, setTilsyn] = React.useState<Tilsyn[]>();

  React.useEffect(() => {
    if (shouldUseInputFields && !shouldUseAccessToken) {
      const fetchTilsyn = async () => {
        const response = await fetchTilsynListWithQueryParams(queryParams);
        const tilsyn = await response.json();
        setTilsyn(tilsyn);
        onFetchedTilsyn();
      };
      fetchTilsyn();
    } else if (shouldUseAccessToken) {
      const fetchTilsyn = async () => {
        const response = await fetchTilsynListWitHeaderParam(queryParams);
        const tilsyn = await response.json();
        setTilsyn(tilsyn);
        onFetchedTilsyn();
      };
      fetchTilsyn();
    } else {
      const fetchTilsyn = async () => {
        const response = await fetchTilsynList();
        const tilsyn = await response.json();
        setTilsyn(tilsyn);
        onFetchedTilsyn();
      };
      fetchTilsyn();
    }
  }, [shouldFetchTilsyn]);

  if (tilsyn) {
    return (
      <Box alignItems="flex-start" alignContent="flex-start">
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Navn</Th>
              <Th>Poststed</Th>
              <Th isNumeric>Postnummer</Th>
              <Th>Dato</Th>
              <Th>Smilefjes</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tilsyn &&
              tilsyn.map((item) => (
                <Tr key={item.tilsynsId}>
                  <Td>{item.navn}</Td>
                  <Td>{item.poststed}</Td>
                  <Td>{item.postnummer}</Td>
                  <Td>{item.dato}</Td>
                  <Td>{mapSmilefjesToEmoji(item.smilefjes)}</Td>
                  {enableDetailsLink && (
                    <Td>
                      <Button
                        colorScheme="blue"
                        onClick={() => {
                          onShowTilsynDetails(item.tilsynsId);
                        }}
                      >
                        Se detaljer
                      </Button>
                    </Td>
                  )}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    );
  } else {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
};
