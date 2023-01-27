import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3.5rem;
  background-color: #fcfcfc;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;

const UL = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1.9rem;
`;

const LI = styled.li`
  font-weight: 700;
`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: #4756df;
  transition: 0.3s;
`;

function Layout() {
  return (
    <>
      <Navbar>
        <UL>
          <LI>
            <LinkStyled href='/'>Inicio</LinkStyled>
          </LI>
          <LI>
            <LinkStyled href='/cart'>Carrito</LinkStyled>
          </LI>
          <LI>
            <LinkStyled href='/search'>Buscar</LinkStyled>
          </LI>          
        </UL>
        <h1>Usuario</h1>
      </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;