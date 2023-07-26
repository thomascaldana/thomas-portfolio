import styled, { css } from 'styled-components'

interface MenuOptionsProps {
  isVisible: boolean;
}

/* export const Container = styled.div`
  width: 100%;
  height: 80px;
  font-size: 1.05rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 28px 12px;
`
export const Name = styled.a`
  display: flex;
  flex-flow: row nowrap;
  gap: .5rem;
  font-family: 'IBM Plex Sans', sans-serif;
  align-items: center;
  cursor: pointer;

  p{
    font-weight: 700;
  }
  `

export const Button = styled.div`
  background: #f1f1f1;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  `
export const Menu = styled.div`
  display: flex;
  align-items: center;

.menu-icon{
  width: 1.8rem; 
  height: 1.8rem;
}
` */

export const Container = styled.header`
  background: #F1F1F1;

  .menu {
  width: 100%;
  height: 12rem;
  background-color: rgb(206, 220, 250);
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

}
  `

export const Name = styled.a`
  display: flex;
  flex-flow: row nowrap;
  gap: .5rem;
  font-family: 'IBM Plex Sans', sans-serif;
  align-items: center;
  cursor: pointer;

  p{
    font-weight: 700;
  }
  `

export const MenuOptions = styled.div<MenuOptionsProps>`

${({ isVisible }) => css`
    display: ${isVisible ? 'block' : 'none'};
  `}
  `