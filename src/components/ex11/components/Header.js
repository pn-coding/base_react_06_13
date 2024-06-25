import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 250px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 26px;
`;

const Menu = styled.ul`
  display: flex;
  li {
    margin-left: 100px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/">LOGO</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={"/sub/0"}>Sub01</Link>
        </li>
        <li>
          <Link to={"/sub/1"}>Sub02</Link>
        </li>
      </Menu>
    </SHeader>
  );
};
