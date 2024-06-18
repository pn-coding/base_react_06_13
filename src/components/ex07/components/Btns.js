import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";

const BtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  font-size: 18px;
  .pause_btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${colors.pointColor};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Btns = () => {
  return (
    <BtnWrap>
      <li>
        <FontAwesomeIcon icon={faShuffle} />
      </li>
      <li>
        <FontAwesomeIcon icon={faBackward} />
      </li>
      <li className="pause_btn">
        <FontAwesomeIcon icon={faPause} />
      </li>
      <li>
        <FontAwesomeIcon icon={faForward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faRepeat} />
      </li>
    </BtnWrap>
  );
};
