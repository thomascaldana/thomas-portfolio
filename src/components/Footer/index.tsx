import { FC } from 'react'
import { Container, MyPhoto, Thanks, GrayText, LinkedinContainer, LinkedinButton, SiLinkedinStyled } from './styles'
import myPhoto from '../../assets/images/my-photo.png'


const Footer: FC = () => {


  return (
    <Container>
    
      <MyPhoto src={myPhoto} alt="my-picture" />
      <Thanks>Thank you!</Thanks>
      <GrayText>E-mail: thomascaldana@gmail.com</GrayText>
      <GrayText>Phone: +55 19 99601-8238</GrayText>

      <LinkedinContainer>
        <GrayText>Follow me on Linkedin and let's talk</GrayText>
        <LinkedinButton  >
              <SiLinkedinStyled />
        </LinkedinButton>
        
      </LinkedinContainer>
  
    </Container>
  )
}

export default Footer