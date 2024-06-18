import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  h3 {
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    opacity: 0.7;
    font-weight: 300;
    margin-top: 10px;
  }
`;

export const TitleWrap = () => {
  return (
    <Title>
      <h3>Blue Bird</h3>
      <p>Pick Dreams</p>
    </Title>
  );
};
