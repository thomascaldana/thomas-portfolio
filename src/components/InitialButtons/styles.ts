import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'

export const ContainerButtons = styled.div`
max-width: 1300px;
margin: 0 auto;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
gap: 1.1rem;
font-family: 'Inter', sans-serif;
padding: 0 1rem 1rem 1rem;

@media screen and (min-width: 800px) {
  flex-flow: row nowrap;
  justify-content: flex-start;
  }
`

export const Link = styled.a`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
`

export const ExploreProjectsButton = styled.button`
min-width: 11rem;
width: 90vw;
height: 2.3rem;
background: #5f1aff;
border-radius: 0.45rem;
border: none;
cursor: pointer;
font-style: normal;
font-weight: 700;
font-size: 1rem;
line-height: 1.5rem;
text-align: center;
color: #EEEEEE;

&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.6;
}

@media screen and (min-width: 800px) {
  width: 12rem;
  height: 2.7rem;
  }
`

export const DownloadButton = styled.button`
min-width: 11rem;
width: 90vw;
height: 2.7rem;
background: white;
border-radius: 0.45rem;
border: 2px solid black;
cursor: pointer;
font-style: normal;
font-weight: 500;
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

@media screen and (min-width: 800px) {
  width: 13rem;
  }
`
export const GitHubButton = styled.button`
min-width: 9rem;
width: 90vw;
height: 2.7rem;
background: white;
border-radius: 0.45rem;
border: 2px solid black;
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

@media screen and (min-width: 800px) {
  width: 9rem;
  }
`
export const WhatsAppButton = styled.button`
min-width: 9rem;
width: 90vw;
height: 2.3rem;
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

@media screen and (min-width: 800px) {
  width: 9rem;
  height: 2.7rem;
  }
`


export const FiDownloadStyled = styled(FiDownload)`
width: 1.2rem;
height: 1.2rem;
color: black;
`
export const AiFillGithubStyled = styled(AiFillGithub)`
width: 1.4rem;
height: 1.4rem;
color: black;
`
export const IoLogoWhatsappStyled = styled(BsWhatsapp)`
width: 1.4rem;
height: 1.4rem;
color: white;
`



