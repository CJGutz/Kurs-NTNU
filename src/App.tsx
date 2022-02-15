import * as React from "react";
import { ChakraProvider, theme, Container } from "@chakra-ui/react";
import { TilsynList } from "./TilsynList";
import { InputFields } from "./InputFields";
import { TilsynDetails } from "./TilsynDetails";
import { QueryParams } from "./types";

export const App = () => {
  const [showTilsynSearch, setShowTilsynSearch] = React.useState(true);
  const [showTilsynList, setShowTilsynList] = React.useState(false);
  const [selectedTilsyn, setSelectedTilsyn] = React.useState<string>();
  const [shouldFetchTilsyn, setShouldFetchTilsyn] =
    React.useState<boolean>(false);
  const [queryParams, setQueryParams] = React.useState<QueryParams>();

  function handleOnFetchTilsyn(queryParams: QueryParams) {
    setShowTilsynList(true);
    setQueryParams(queryParams);
    setShouldFetchTilsyn(true);
  }

  function clear() {
    setShowTilsynSearch(true);
    setShowTilsynList(false);
    setSelectedTilsyn(undefined);
    setQueryParams(undefined);
    setShouldFetchTilsyn(false);
  }

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg" paddingTop="10">
        {showTilsynSearch && (
          <InputFields onFetchTilsyn={handleOnFetchTilsyn} />
        )}

        {showTilsynList && (
          <TilsynList
            onShowTilsynDetails={(tilsynId: string) => {
              setShowTilsynList(false);
              setShowTilsynSearch(false);
              setSelectedTilsyn(tilsynId);
            }}
            queryParams={queryParams}
            shouldFetchTilsyn={shouldFetchTilsyn}
            onFetchedTilsyn={() => setShouldFetchTilsyn(false)}
          />
        )}
        {selectedTilsyn && (
          <TilsynDetails tilsynId={selectedTilsyn} onClear={clear} />
        )}
      </Container>
    </ChakraProvider>
  );
};
