import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
`;

export const Quiz = () => {
  const [bg, setBg] = useState("gray");
  const [active, setActive] = useState(true);

  const onColorChange = () => {
    if (active) {
      setBg("salmon");
      setActive(false);
    } else if (!active) {
      setBg("gray");
      setActive(true);
    }
  };

  return (
    <div>
      <Box $bgColor={bg} onClick={onColorChange}></Box>
    </div>
  );
};
