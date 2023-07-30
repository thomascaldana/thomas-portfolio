import { FC } from 'react'
import { Container, IconContainer, Icon } from './styles'
import HtmlIcon from '../../assets/images/HTML.svg'
import CssIcon from '../../assets/images/CSS.svg'
import JSIcon from '../../assets/images/JS.svg'
import TSIcon from '../../assets/images/TS.svg'
import NodeIcon from '../../assets/images/node.svg'
import ReactIcon from '../../assets/images/react.svg'
import ReactNativeIcon from '../../assets/images/react-native.svg'
import GitIcon from '../../assets/images/git.svg'


const Technologies: FC = () => {


  return (
    <Container>
      <IconContainer>
        <Icon src={HtmlIcon} alt='html-icon'></Icon>
        <figcaption>HTML</figcaption>
      </IconContainer>

      <IconContainer>
        <Icon src={CssIcon} alt='css-icon'></Icon>
        <figcaption>CSS</figcaption>
      </IconContainer>

      <IconContainer>
        <Icon src={JSIcon} alt='js-icon'></Icon>
        <figcaption>JavaScript</figcaption>
      </IconContainer>

      <IconContainer>
        <Icon src={TSIcon} alt='ts-icon'></Icon>
        <figcaption>TypeScript</figcaption>
      </IconContainer>
      <IconContainer>
        <Icon src={ReactIcon} alt='react-icon'></Icon>
        <figcaption>React</figcaption>
      </IconContainer>

      <IconContainer>
        <Icon src={ReactNativeIcon} alt='react-native-icon'></Icon>
        <figcaption>React Native</figcaption>
      </IconContainer>



      <IconContainer>
        <Icon src={NodeIcon} alt='node-icon'></Icon>
        <figcaption>Node</figcaption>
      </IconContainer>

      <IconContainer>
        <Icon src={GitIcon} alt='git-icon'></Icon>
        <figcaption>Git</figcaption>
      </IconContainer>

    </Container>
  )
}

export default Technologies