import styled, { css } from 'styled-components'
interface MenuOptionsProps {
  isVisible: boolean;
}

export const Container = styled.header`
  background: #e6e6e6;

  .menu {
  width: 100%;
  height: 12rem;
  background-color: #e6e6e6;
  top: 0;
  z-index: -1;
}

.menu-options {
  padding: 20px 5px ;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 20px;
  font-size: 1.1rem;
  font-family: sans-serif;  

  .li-item{
  list-style-type: none;
  cursor: pointer;
}
}
`
export const Nav = styled.nav`
  width: 100%;
  height: 4em;
  display: flex;
  justify-content:space-between;
  padding: 1em;

  .burger-menu {
  height: 100%;
  width: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (min-width: 600px) {
   display: none;
}
  @media screen and (min-width: 1300px) {
   //margin: 0 120px;
}
  }

  .burger-bar {
  width: 2em;
  height: 0.25em;
  background-color: #000000;
  border-radius: 0.5em;
}

.burger-bar.clicked:nth-child(1){
  transform: rotate(45deg) translate(0.25em, .5em);
  transition: ease-out 0.5s;
}

.burger-bar.clicked:nth-child(2){
  transform: scale(0.01);
  /* // transition: ease-out 0.01s; */
}

.burger-bar.clicked:nth-child(3){
  transform: rotate(135deg) translate(-.7em, 1em);
  transition: ease-out 0.5s;
}

/* unclicked */
.burger-bar.unclicked {
  transform: rotate(0) translate(0);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
}


  `

export const Name = styled.a`
  display: flex;
  flex-flow: row nowrap;
  gap: .5rem;
  font-family: 'IBM Plex Sans', sans-serif;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  p{
    font-weight: 700;
    color: #000000
  }

  svg {
    color: #000000
  }

  `

export const MenuOptions = styled.div<MenuOptionsProps>`

${({ isVisible }) => css`
    display: ${isVisible ? 'block' : 'none'};
  `}
  
  @media screen and (min-width: 600px) {
   display: none;
  }
  `

export const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 30px;
  font-size: 1.1rem;
  font-family: sans-serif; 
  cursor: pointer;
  .li-item{
  list-style-type: none;
  }
  
  @media screen and (max-width: 600px) {
   display: none;
}
  `