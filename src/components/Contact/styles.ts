import styled from 'styled-components'
import { BsWhatsapp } from 'react-icons/bs'

export const Container = styled.div`

`
export const ContainerItems = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
`


export const Link = styled.a`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
`

export const WhatsAppButton = styled.button`
width: 4rem;
height: 4rem;
background: linear-gradient(rgb(81, 198, 112) 0%, rgb(81, 208, 153) 100%);
border-radius: 0.45rem;
border: none;
cursor: pointer;
font-style: normal;
font-weight: 700;
font-size: 1rem;
line-height: 1.5rem;
text-align: center;
color: #000000;

&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.6;
}
`


export const IoLogoWhatsappStyled = styled(BsWhatsapp)`
width: 1.4rem;
height: 1.4rem;
color: white;
`