import styled from 'styled-components'
import { BsWhatsapp } from 'react-icons/bs'
import { SiLinkedin } from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi"

export const Container = styled.div`
padding: 1rem;
max-width: 1300px;
margin: 0 auto 5rem auto;


h2{
  text-align: center;
}

span{
  color: #6600ff;
}

@media screen and (min-width: 800px) {
display: flex;
flex-flow: row nowrap;
gap: 3rem;
margin: 0 auto 7rem auto;

h2{
  text-align: left;
}
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`
export const ContainerItems = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ContainerText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  
  h2, p, a {
  color: #495057;
  font-family: 'Inter', sans-serif;
  line-height: 1.75rem;
  text-align: justify;

  }

  a{
    cursor: pointer;
    text-decoration: none;
    &:hover{
      font-weight: 800;
    }
  }

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
display: flex;
justify-content: center;
align-items: center;

&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.6;
}
`
export const LinkedinButton = styled.button`
width: 4rem;
height: 4rem;
background:  linear-gradient(rgb(78, 115, 255) 0%, rgb(80, 108, 207) 100%);
border-radius: 0.45rem;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.6;
}
`
export const EmailButton = styled.button`
width: 4rem;
height: 4rem;
background: linear-gradient(0deg, rgba(254,117,19,1) 0%, rgba(255,134,77,1) 35%);
border-radius: 0.45rem;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

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
export const HiOutlineMailStyled = styled(HiOutlineMail)`
width: 1.65rem;
height: 1.65rem;
color: white;
`

export const SiLinkedinStyled = styled(SiLinkedin)`
width: 1.4rem;
height: 1.4rem;
color: white;
`