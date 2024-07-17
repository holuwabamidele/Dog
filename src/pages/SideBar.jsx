import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <div>
            <FaMagnifyingGlass />
          </div>
          <nav>Caring for a dog</nav>
          <nav>Breeds</nav>
          <nav>Blogs</nav>
          <nav>Shop</nav>
          <nav>Services</nav>
          <nav>Adoption</nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  position: fixed;
  background-color: lightgrey;
  height: 40vh;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Navigation = styled.div`
  text-align: center;
  margin-top: 10px;
  nav {
    font-weight: 600;
    margin: 10px 0px;
    font-size: 14px;
    cursor: pointer;
  }
`;
