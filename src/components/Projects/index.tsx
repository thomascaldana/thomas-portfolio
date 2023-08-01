import { FC } from 'react'
import { Container, TitleImg, Img, AiFillGithubStyled, LinksWrapper, ProjectContainer, Link } from './styles'
import BurguerProjectImg from '../../assets/images/project-burguer.svg'
import TapestryProject from '../../assets/images/project-tepecaria.svg'
import InsuranceProject from '../../assets/images/project-insurance.svg'
import ProjectsTitle from '../../assets/images/projetcs-title.svg'
import { FaExternalLinkAlt } from 'react-icons/fa'



const Projects: FC = () => {


  return (
    <Container id='projects'>

      <ProjectContainer>
        <TitleImg src={ProjectsTitle}></TitleImg>
        <Img src={BurguerProjectImg}></Img>
        <LinksWrapper>
          <Link href='https://github.com/thomascaldana/code-burger-interface' target='_blank'>
            <AiFillGithubStyled />
            GitHub Code
            <FaExternalLinkAlt />
          </Link>
          <Link href='https://hamburgueria-taupe.vercel.app/' target='_blank'>
            See Demonstration
            <FaExternalLinkAlt />
          </Link>
        </LinksWrapper>
      </ProjectContainer>

      <ProjectContainer>
        <Img src={TapestryProject}></Img>
        <LinksWrapper>
          <Link href='https://github.com/thomascaldana/react-tapecaria-website' target='_blank'>
            <AiFillGithubStyled />
            GitHub Code
            <FaExternalLinkAlt />
          </Link>
          <Link href='https://tapecariapolyspuma.vercel.app/' target='_blank'>
            See Demonstration
            <FaExternalLinkAlt />
          </Link>
        </LinksWrapper>
      </ProjectContainer>

      <ProjectContainer>
        <Img src={InsuranceProject}></Img>
        <LinksWrapper>
          <Link href='https://github.com/thomascaldana/insurance-website' target='_blank'>
            <AiFillGithubStyled />
            GitHub Code
            <FaExternalLinkAlt />
          </Link>
          <Link href='https://thomascaldana.github.io/insurance-website/' target='_blank'>
            See Demonstration
            <FaExternalLinkAlt />
          </Link>
        </LinksWrapper>
      </ProjectContainer>

    </Container>
  )
}

export default Projects