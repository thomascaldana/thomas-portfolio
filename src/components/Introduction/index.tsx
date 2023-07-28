import { FC } from 'react'
import { Container, MyPhoto, HelloContainer, Span, FirstParagraph, SecondParagraph } from '../Introduction/styles'
import myPhoto from '../../assets/images/my-photo.png'


const Introduction: FC = () => {


  return (
    <Container>
      <HelloContainer>
        <MyPhoto src={myPhoto} alt="my-picture" />
        <FirstParagraph>Hello World! <br/>I am Thomás Caldana. 👋🏻</FirstParagraph>
      </HelloContainer>
      <h1>I <Span>love</Span> to develop new ideas and create <Span>solutions</Span>.</h1>
      <SecondParagraph>Welcome to my portfolio, this environment is created especially for you! Here, you see some of my projects and technologies. Check contact session if you have any feedbacks. 😉</SecondParagraph>
    </Container>
  )
}

export default Introduction