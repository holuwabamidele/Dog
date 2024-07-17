import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import SideBar from "./SideBar";
import { useState } from "react";
import { IoReorderFour } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Wrapper>
        <Navigations>
          <nav>Caring for a dog</nav>
          <nav>Breeds</nav>
          <nav>Blogs</nav>
        </Navigations>
        <h1>Honden</h1>
        <Navigations>
          <nav>Shop</nav>
          <nav>Services</nav>
          <nav>Adoption</nav>
          <Glass>
            <FaMagnifyingGlass />
          </Glass>
        </Navigations>
        <SideNav onClick={handleToggle}>
          <IoReorderFour />
        </SideNav>
      </Wrapper>
      <div>{toggle ? <SideBar /> : null}</div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  /* background-color: red; */
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  /* background-color: aqua; */
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    /* background-color: red; */
  }
  h1 {
    font-family: "Satisfy";
    font-weight: 600;
    cursor: pointer;
    /* background-color: red; */
  }
`;

const Navigations = styled.div`
  display: flex;
  nav {
    margin: 0px 10px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const SideNav = styled.div`
  /* background-color: yellow; */
  display: none;
  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;

const Glass = styled.div`
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
