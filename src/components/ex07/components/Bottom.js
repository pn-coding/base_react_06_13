import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../GlobalStyled";
import styled from "styled-components";

const BottomControl = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: white;
  border-radius: 30px;
  margin-top: 30px;
  color: gray;
  align-items: center;
  padding: 15px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Img = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 10px;
`;

const NextBtn = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.mainBlack};
`;

export const Bottom = () => {
  return (
    <BottomControl>
      <UserContainer>
        <Img />
        <h3>PNcoding</h3>
      </UserContainer>

      <NextBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NextBtn>
    </BottomControl>
  );
};
