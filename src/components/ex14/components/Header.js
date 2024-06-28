import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Gnb = styled.ul`
  display: flex;
  li {
    margin-left: 30%;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <Gnb>
        <li>
          <Link to={"/login"}>LOGIN</Link>
        </li>
        <li>
          <Link to={"/signup"}>SIGNUP</Link>
        </li>
      </Gnb>
    </SHeader>
  );
};
