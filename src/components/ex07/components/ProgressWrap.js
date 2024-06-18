import styled from "styled-components";
import { colors } from "../../../GlobalStyled";

const ProgressBar = styled.div`
  margin-top: 30px;
`;

const GageWrap = styled.div`
  background-color: gray;
  height: 4px;
  border-radius: 5px;
`;

const Bar = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${colors.pointColor};
`;

const PlayTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 5px;
  opacity: 0.7;
`;

export const ProgressWrap = () => {
  return (
    <ProgressBar>
      <GageWrap>
        <Bar />
      </GageWrap>
      <PlayTime>
        <p>00:03</p>
        <p>03:40</p>
      </PlayTime>
    </ProgressBar>
  );
};
