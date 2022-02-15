import React from "react";
import {
  Spinner,
  SimpleGrid,
  Box,
  Text,
  Button,
  Heading,
  Center,
  Stack,
  Table,
  Tbody,
  Tr,
  Td,
  Tag,
} from "@chakra-ui/react";
import { TilsynDetailsType } from "./types";
import { mapSmilefjesScoreToEmoji, mapSmilefjesToEmoji } from "./utils";
import { fetchTilsynDetails } from "./oppgave3";

type TilsynDetailsProps = {
  tilsynId: string;
  onClear: () => void;
};

export const TilsynDetails = (props: TilsynDetailsProps) => {
  const [tilsynDetails, setTilsynDetails] = React.useState<TilsynDetailsType>();

  React.useEffect(() => {
    const getTilsynDetails = async () => {
      const response = await fetchTilsynDetails(props.tilsynId);
      const tilsyn = await response.json();
      setTilsynDetails(tilsyn);
    };
    getTilsynDetails();
  }, []);

  if (tilsynDetails) {
    return (
      <>
        <Button
          justifySelf={"flex-end"}
          width={100}
          colorScheme="blue"
          onClick={props.onClear}
        >
          Gå tilbake
        </Button>
        <Center h="100px" marginBottom="50">
          <Stack marginBottom="10">
            <Heading>{tilsynDetails.navn}</Heading>
            <Text as="em">
              {`${tilsynDetails.adresse}, ${tilsynDetails.postnummer} ${tilsynDetails.poststed}`}
            </Text>
            <Text as="em">Tilsyn gjennomført: {tilsynDetails.dato} </Text>
          </Stack>
        </Center>
        <SimpleGrid minChildWidth="260px" spacing="40px">
          <Box textAlign="center" height="200px">
            <Text>Tilsynsresultat: </Text>
            <Text fontSize="100">{`${mapSmilefjesToEmoji(
              tilsynDetails.smilefjes
            )}`}</Text>
          </Box>

          <Box height="200px" alignContent="space-between">
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td>Lokaler og utstyr:</Td>
                  <Td>
                    {mapSmilefjesScoreToEmoji(tilsynDetails.lokalerOgUtstyr)}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Mathåndtering og tilbredning:</Td>
                  <Td>
                    {mapSmilefjesScoreToEmoji(
                      tilsynDetails.mathåndteringOgTilberedning
                    )}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Merking og sporbarhet:</Td>
                  <Td>
                    {mapSmilefjesScoreToEmoji(
                      tilsynDetails.merkingOgSporbarhet
                    )}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Rutiner og ledelse:</Td>
                  <Td>
                    {mapSmilefjesScoreToEmoji(tilsynDetails.rutinerOgLedelse)}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Box height="200px">
            <Stack marginBottom="10">
              <Box>
                <Text as="b">Tilsynsid:</Text>
                <Tag>{tilsynDetails.tilsynsId}</Tag>
              </Box>
              <Box>
                <Text as="b">Tilsynshistorikkid:</Text>
                <Tag>{tilsynDetails.tilsynshistorikkId}</Tag>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </>
    );
  } else {
    return <Spinner />;
  }
};
