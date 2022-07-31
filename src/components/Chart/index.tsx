import { FunctionComponent } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styled from 'styled-components';
import { GHGTypeData } from "../../types/GHGTypeData";

type ChartProps = {
  data: GHGTypeData[];
  tooltip?: JSX.Element;
  isLoading: boolean;
};

const ChartLoader = styled.div`
  text-align:center;
  margin-top:3em;
  font-family:'Lato', sans-serif;
  font-size:3em;
`;

const Chart: FunctionComponent<ChartProps> = ({ data, tooltip, isLoading }) => {
  if (isLoading) return <ChartLoader>Loading...</ChartLoader>;

  return (
    <ResponsiveContainer width={'99%'} height="80%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line dot={false} type="monotone" dataKey="average" stroke="#8884d8" />
        <XAxis dataKey="end" />
        <YAxis />
        {tooltip && <Tooltip content={tooltip} />}
      </LineChart>
    </ResponsiveContainer>
  );
};

export { Chart };
