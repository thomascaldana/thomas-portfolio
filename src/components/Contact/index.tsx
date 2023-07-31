import { FC } from 'react'
import { Container, Link, WhatsAppButton, ContainerItems, IoLogoWhatsappStyled } from './styles'


const Contact: FC = () => {


  return (
    <Container>
      <h2>Let's partner up to develop solutions that perfectly fit your company's needs. I'm here to support you every step of the way!</h2>
      <ContainerItems>
        <Link href='https://wa.me/+5519996018238' target='_blank' >
          <WhatsAppButton  >
            <IoLogoWhatsappStyled />
          </WhatsAppButton>
        </Link>

        <div>
          <h3>My WhatsApp</h3>
          <p>I'm available for messages or calls</p>
          <a>Get in touch</a>
        </div>
      </ContainerItems>

    </Container>
  )
}

export default Contact