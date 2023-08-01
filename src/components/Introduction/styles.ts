import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 2.9rem 1rem 2rem 1rem;
  display: flex;
  flex-flow: column;
  gap: .9rem;

  h1{
    text-align: center;

    @media screen and (min-width: 800px) {
   text-align: left;
   font-size: 2.5rem;
    }
  }
`
export const MyPhoto = styled.img`
  width: 4rem;
  height: 4rem;
`
export const HelloContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.8rem
`
export const Span = styled.span`
  color: #6600ff;
`
export const FirstParagraph = styled.p`
  color: #212529;
  font-family: 'Inter', sans-serif;
  line-height: 1.75rem;
`
export const SecondParagraph = styled.p`
  color: #495057;
  font-family: 'Inter', sans-serif;
  line-height: 1.75rem;
  text-align: center;

  @media screen and (min-width: 800px) {
   text-align: left;
  }
`
