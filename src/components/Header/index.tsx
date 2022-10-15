import React from 'react'

import * as Styled from './styles'

import logoImage from '../../assets/img/logo-dt.svg'
import  * as Dialog from '@radix-ui/react-dialog'

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Image src={logoImage}/>
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Styled.NewTransactionButton>Nova Transação</Styled.NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay></Dialog.Overlay>
            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>

              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </Styled.Content>
    </Styled.Container>
  )
}

export default Header