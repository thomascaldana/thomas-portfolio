import { FC } from 'react'
import { Container, Img } from './styles'
import BurguerProject from '../../assets/images/Projeto-burguer.svg'


const Projects: FC = () => {


  return (
    <Container>
      <h2>Hamburguer Shop Website</h2>
      <Img src={BurguerProject}></Img>
      
    </Container>
  )
}

export default Projects