import styled from "styled-components";
import { colors } from "../../GlobalStyled";
import { Header } from "./components/Header";
import { Cover } from "./components/Cover";
import { TitleWrap } from "./components/TitleWrap";
import { ProgressWrap } from "./components/ProgressWrap";
import { Btns } from "./components/Btns";
import { Bottom } from "./components/Bottom";

const Wrap = styled.div`
  max-width: 390px;
  width: 100%;
  margin: 50px auto;
  background-color: ${colors.mainBlack};
  height: 844px;
  border-radius: 30px;
  color: white;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <Header />

      <Cover />

      <TitleWrap />

      <ProgressWrap />

      <Btns />

      <Bottom />
    </Wrap>
  );
};
