import { useState } from "react";
import styled from "styled-components";
import { useGHGTypes, useSingleGHGType } from "./api";
import { Chart } from "./components/Chart";
import { CustomTooltip } from "./components/CustomTooltip";
import { Header } from './elements/Header';
import { Logo } from './elements/Logo';
import { TypeItem } from "./elements/TypeItem";
import { TypeList } from "./elements/TypeList";
import { GHGType } from "./types/GHGType";
import ReactLogo from './assets/plana_logo.svg';

const DESCRIPTION = `Plan A helps companies monitor, reduce, and offset their carbon footprint,
  based on the data they input about their emissions. Though this gives individual companies visibility
  on their own emissions, it doesn’t give us a clear idea on our progress on a country level. This task
  addresses the other side of the problem; using satellite data to estimate the amount of GHG emissions
  in the atmosphere over time to measure our actual impact.`;

const App = (): JSX.Element => {
  const [ selectedGHGType, setSelectedGHGType ] = useState<string>("");
  const { data: GHGTypes, isLoading } = useGHGTypes();
  const { data: GHGSingleTypeData, isLoading: isFetchingData } =
    useSingleGHGType(selectedGHGType);

  function handleOnTypeClick(typeName: string) {
    setSelectedGHGType(typeName);
  }

  return (
    <AppContainer>
      <Logo>
        <img width={"40%"} src={ReactLogo} alt="React Logo" />
      </Logo>
      <Header>
        <p>{DESCRIPTION}</p>
      </Header>
      <TypeList>
        {!isLoading &&
          GHGTypes.map((type: GHGType) => (
            <TypeItem
              key={type.name}
              onClick={() => handleOnTypeClick(type.name)}
              data-testid="ghg-list-item"
            >
              {type.name}
            </TypeItem>
          ))}
      </TypeList>
      <Chart
        data={GHGSingleTypeData}
        tooltip={<CustomTooltip />}
        isLoading={isFetchingData}
      />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
