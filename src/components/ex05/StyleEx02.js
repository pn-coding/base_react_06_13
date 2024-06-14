import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => props.$width + "px"};
  height: 300px;
  background-color: ${(props) => props.$bgColor};
`;

const ConWrap = styled.div`
  width: 500px;
  height: 500px;
  background-color: teal;
`;

const Con = styled.div`
  width: 300px;
  height: 300px;
  background-color: rosybrown;
  h2 {
    text-align: center;
    transition: 0.5s;
  }
  &:hover h2 {
    background-color: lightskyblue;
  }
`;

export const StyleEx02 = () => {
  return (
    <div>
      <Box $width="200" $bgColor="aquamarine"></Box>
      <Box $width="500" $bgColor="gold"></Box>

      <ConWrap>
        <Con>
          <h2>텍스트</h2>
        </Con>
      </ConWrap>
    </div>
  );
};
