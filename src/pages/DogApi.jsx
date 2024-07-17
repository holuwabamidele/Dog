import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const DogApi = () => {
  const [DogList, setDogList] = useState([]);

  const getDogList = async () => {
    const res = await axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => setDogList(res.data));
  };

  console.log(DogList);

  useEffect(() => {
    getDogList();
  }, []);

  return (
    <Container>
      <Wrapper>
        <div>
          <img src={DogList.message} alt="image" />
        </div>
        <h3>Dogs Crossbreeds that are too cute</h3>
      </Wrapper>
    </Container>
  );
};

export default DogApi;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-family: sans-serif;
  }

  div {
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    img {
      width: 500px;
      /* height: 300px; */
      object-fit: cover;

      @media (max-width: 768px) {
        width: 90%;
        display: flex;
        justify-content: center;
        text-align: center;
      }
    }
  }
`;
