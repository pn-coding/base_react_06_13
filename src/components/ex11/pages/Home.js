import { Link } from "react-router-dom";
import styled from "styled-components";
import { datas } from "../data/datas";

const MainBanner = styled.section`
  height: 900px;
  background-color: lightgray;
`;

const Section = styled.section`
  padding: 100px 250px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 48%;
  height: 700px;
  background-color: lightgray;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Home = () => {
  return (
    <div>
      <MainBanner />

      <Section>
        {datas.map((data) => (
          <Con>
            <Link to={`/sub/${data.id}`}>
              <img src={data.imgUrl} alt={data.title} />
            </Link>
          </Con>
        ))}
      </Section>
    </div>
  );
};
