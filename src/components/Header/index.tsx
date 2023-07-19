import { Container, Name, Menu, Button } from '../Header/styles'
import { SiLinkedin } from "react-icons/si"
import { GiHamburgerMenu } from "react-icons/gi"


const Header = (): JSX.Element => {


  return (
    <>
    <Container>
      <Name>
        <p>Thomás Caldana</p>
        <SiLinkedin />
      </Name>
      <Menu>
        <Button><GiHamburgerMenu className='menu-icon' /></Button>
      </Menu>
    </Container>
    <div>
      <ul>
        <li><a>Home</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
        <li><a>Contact</a></li>
       </ul>
    </div>
    </>
  )
}




export default Header