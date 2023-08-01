import styled from 'styled-components'
import { SiLinkedin } from "react-icons/si"


export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  
`
export const Thanks = styled.p`
  font-family: 'Inter', sans-serif;
  color: black;
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`
export const GrayText = styled.p`
    color: gray;
    font-family: 'Inter', sans-serif;
    line-height: 1.75rem;
    text-align: justify;
    font-size: 0.9rem;
`
export const MyPhoto = styled.img`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
`
export const LinkedinContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`

export const LinkedinButton = styled.button`
width: 2.2rem;
height: 2.2rem;
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

export const SiLinkedinStyled = styled(SiLinkedin)`
width: 1.4rem;
height: 1.4rem;
color: white;
`