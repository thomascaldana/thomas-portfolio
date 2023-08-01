import { FC } from 'react'
import { Container, Link, WhatsAppButton, LinkedinButton, EmailButton, ContainerItems, IoLogoWhatsappStyled, ContainerText, Wrapper,  SiLinkedinStyled, HiOutlineMailStyled } from './styles'


const Contact: FC = () => {


  return (
    <Container id='contact'>
      <h2>Let's partner up to <span>develop solutions</span> that perfectly fit your company's <span>needs</span></h2>

      <div>
      <Wrapper>
        <ContainerItems>
          <Link href='https://wa.me/+5519996018238' target='_blank' >
            <WhatsAppButton  >
              <IoLogoWhatsappStyled />
            </WhatsAppButton>
          </Link>

          <ContainerText>
            <h3>My WhatsApp</h3>
            <p>I'm available for messages or calls</p>
            <a href='https://wa.me/+5519996018238' target='_blank'>Get in touch</a>
          </ContainerText>
        </ContainerItems>
      </Wrapper>

      <Wrapper>
        <ContainerItems>
          <Link href='https://mail.google.com/mail/?view=cm&source=mailto&to=[thomascaldana@gmail.com]' target='_blank' >
            <EmailButton  >
              <HiOutlineMailStyled />
            </EmailButton>
          </Link>

          <ContainerText>
            <h3>My e-mail</h3>
            <p>Send me an e-mail about your interest, feedbacks, suggestion and ideas</p>
            <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=[thomascaldana@gmail.com]' target='_blank'>Send me an e-mail</a>
          </ContainerText>
        </ContainerItems>
      </Wrapper>

      <Wrapper>
        <ContainerItems>
          <Link href='https://www.linkedin.com/in/thomas-caldana/' target='_blank' >
            <LinkedinButton  >
              <SiLinkedinStyled />
            </LinkedinButton>
          </Link>

          <ContainerText>
            <h3>My Linkedin</h3>
            <p>I'm available for messages or calls</p>
            <a href='https://www.linkedin.com/in/thomas-caldana/' target='_blank'>Go to LinkedIn now</a>
          </ContainerText>
        </ContainerItems>
      </Wrapper>
      </div>

    </Container>
  )
}

export default Contact