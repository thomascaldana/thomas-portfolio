import { FC } from 'react'
import { Container, MyPhoto, HelloContainer } from '../Introduction/styles'
import myPhoto from '../../assets/images/my-photo.png'


const Introduction: FC = () => {


  return (
    <Container>
      <HelloContainer>
        <MyPhoto src={myPhoto} alt="my-picture" />
        <p>Hello World! <br/>I am Thomás Caldana. 👋</p>
      </HelloContainer>
      <h1>I <span>love</span> to develop new ideas and create <span>solutions</span>.</h1>
      <p>Welcome to my portfolio, this environment is created especially for you! Here, you see some of my projects and technologies. Check contact session if you have any feedbacks. 😉</p>
    </Container>
  )
}

export default Introduction