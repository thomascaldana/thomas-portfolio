import { Container, Name, Nav, MenuOptions, Ul } from '../Header/styles'
import { SiLinkedin } from "react-icons/si"
import { FC, useState } from 'react'

export const Header: FC = () => {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

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
        <Name href='https://www.linkedin.com/in/thomas-caldana/' target='_blank'>
           <p>Thomás Caldana</p>
          <SiLinkedin />
        </Name>

        <Ul className='nav-links' >
          <li className='li-item'><a>Home</a></li>
          <li className='li-item'><a>Projects</a></li>
          <li className='li-item'><a>Contact</a></li>
          <li className='li-item'><a>Social Media</a></li>
        </Ul>

        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </Nav>

      <MenuOptions className={menu_class} isVisible={isMenuClicked}> 
        <ul className='menu-options' >
          <li className='li-item'><a>Home</a></li>
          <li className='li-item'><a>Projects</a></li>
          <li className='li-item'><a>Contact</a></li>
          <li className='li-item'><a>Social Media</a></li>
        </ul>
      </MenuOptions>
    </Container>
  )

}

