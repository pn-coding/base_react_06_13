import styled from "styled-components";
import { colors } from "../../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  .whiteBtn {
    background-color: white;
    color: ${colors.mainBlack};
  }
`;

const NavBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = () => {
  return (
    <SHeader>
      <NavBtn className="whiteBtn">
        <FontAwesomeIcon icon={faChevronDown} />
      </NavBtn>
      <NavBtn>
        <FontAwesomeIcon icon={faBars} />
      </NavBtn>
    </SHeader>
  );
};
