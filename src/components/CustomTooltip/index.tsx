import styled from "styled-components";
import dayjs from "dayjs";

const ToolTipContainer = styled.div`
  background-color: beige;
  padding: 16px;
`;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <ToolTipContainer>
      <p className="label">{`start :  ${dayjs(payload[0].payload.start).format(
        "DD. MM. YYYY. HH:mm"
      )}`}</p>
      <p className="label">{`end : ${dayjs(payload[0].payload.start).format(
        "DD. MM. YYYY. HH:mm"
      )}`}</p>
      <p className="label">{`value : ${payload[0].value}`}</p>
    </ToolTipContainer>
  );
};

export { CustomTooltip };
