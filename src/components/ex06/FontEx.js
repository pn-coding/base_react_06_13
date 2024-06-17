import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Text = styled.div`
  color: yellow;
  font-size: 50px;
`;

export const FontEx = () => {
  return (
    <div>
      <FontAwesomeIcon style={{ color: "red" }} icon={faMagnifyingGlass} />
      <Text>
        <FontAwesomeIcon icon={faApple} />
      </Text>
    </div>
  );
};
