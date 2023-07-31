import styled from 'styled-components'

export const Container = styled.div`
max-width: 1300px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(4, 8.1rem);
justify-items: center;
align-items: center;
padding: 2rem 1rem;
background: #f1f1f1;


@media screen and (min-width: 800px) {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 8rem);
  }
@media screen and (min-width: 1300px) {
  border-radius: 1.5rem;
  border: 1rem solid white;
  }
`
export const IconContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
gap: 0.2rem
`
export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  align-self: center;
  filter: grayscale(20%);

  &:hover{
  filter: grayscale(0%);
  filter: brightness(1.1);

}

`

