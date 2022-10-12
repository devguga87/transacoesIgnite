import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme['gray-900']};
  padding-top:2.5rem 0 7.5rem 0;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 auto;
  padding:0 1.5rem;
`

export const Image = styled.img`
  max-width: 172px;
`

export const Button  = styled.button`
  width: 152px;
  height: 50px;
  background:${props => props.theme['green-500']};
  border-radius: 6px;
  border:none;

  font-weight: 700;
  line-height: 160%;
  color: ${props => props.theme.white};
  transition:filter .3s;

  &:hover{
    filter:brightness(.8)
  }
`