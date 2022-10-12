import React from 'react'

import * as Styled from './styles'

import logoImage from '../../assets/img/logo-dt.svg'

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Image src={logoImage}/>
        <Styled.Button>Nova Transação</Styled.Button>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Header