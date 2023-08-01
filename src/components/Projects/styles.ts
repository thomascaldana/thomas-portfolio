import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'


export const Container = styled.div`
max-width: 1300px;
margin: 3rem auto 0 auto;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
padding: 2rem 1rem;
`
export const ProjectContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
margin-bottom: 4rem;
`
export const Img = styled.img`
  width: 53rem;
  height: 28rem;
  transform: scale(1);
  transition: transform 1s ease;
  margin-bottom: 0.65rem;

  &:hover{
    transform: scale(1.05);
    transition: 1s;
  }
  @media screen and (max-width: 850px) {
    width: 40rem;
    height: 21rem;
  }
  @media screen and (max-width: 650px) {
    width: 30rem;
    height: 16rem;
  }
  @media screen and (max-width: 500px) {
    width: 23rem;
    height: 12rem;
  }
  @media screen and (max-width: 450px) {
    width: 17rem;
    height: 9rem;
  }
`
export const TitleImg = styled.img`
  width: 27.5rem;
  height: 5.5rem;
  
  @media screen and (max-width: 850px) {
    width: 19rem;
    height: 3.8rem;
  }
`
export const LinksWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  gap: 5rem;

  @media screen and (max-width: 500px) {
    gap: 2rem;
  }
  
  @media screen and (max-width: 380px) {
    flex-flow: column nowrap;
    gap: 0.5rem;
  }
`
export const Link = styled.a`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.4rem;
  opacity: 0.9;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  &:hover {
    opacity: 1;
    font-weight: 800;
    transform: scale(1.02);
  }

`

export const AiFillGithubStyled = styled(AiFillGithub)`
width: 1.4rem;
height: 1.4rem;
color: black;
`