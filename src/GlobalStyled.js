import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  mainBlack: "#1d1d1d",
  pointColor: "#ed143d",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body{
        /* background-color: #555; */
        font-family: "Noto Sans KR", sans-serif;
    }
`;
