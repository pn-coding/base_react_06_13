import { useParams } from "react-router-dom";
import styled from "styled-components";
import { datas } from "../data/datas";

const Section = styled.section`
  padding: 150px 350px;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 45%;
  height: 600px;
  background-color: lightgray;
  background: url(${(props) => props.$img}) no-repeat center / cover;
`;

const ConWrap = styled.div`
  width: 50%;
  h3 {
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 30px;
  }

  p {
    font-weight: 400;
    opacity: 0.7;
  }
`;

export const Sub = () => {
  const { id } = useParams();

  return (
    <Section>
      <Bg $img={datas[id].imgUrl} />
      <ConWrap>
        <h3>{datas[id].title}</h3>
        <p>{datas[id].desc}</p>
      </ConWrap>
    </Section>
  );
};
