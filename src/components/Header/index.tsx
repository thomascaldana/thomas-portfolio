import { Container, Nav, MenuOptions } from '../Header/styles'
import { SiLinkedin } from "react-icons/si"
// import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react'
import './navbar.css'
import { Name } from '../Header/styles'

const Header = (): JSX.Element => {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <Container style={{ width: '100%' }}>
      <Nav>
        <Name>
           <p>Thomás Caldana</p>
          <SiLinkedin />
        </Name>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
      </Nav>

      <MenuOptions className={menu_class}>
        <ul className='menu-options'>
          <li className='li-item'><a>Home</a></li>
          <li className='li-item'><a>Projects</a></li>
          <li className='li-item'><a>Contact</a></li>
          <li className='li-item'><a>Social Media</a></li>
        </ul>
      </MenuOptions>
    </Container>
  )


}




export default Header