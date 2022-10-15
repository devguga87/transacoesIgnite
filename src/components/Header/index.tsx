import * as Styled from './styles'

import logoImage from '../../assets/img/logo-dt.svg'
import  * as Dialog from '@radix-ui/react-dialog'
import NewTransactionModal from '../NewTransactionModal'

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Image src={logoImage}/>
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Styled.NewTransactionButton>Nova Transação</Styled.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal/>
        </Dialog.Root>

      </Styled.Content>
    </Styled.Container>
  )
}

export default Header