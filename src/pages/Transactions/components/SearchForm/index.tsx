import { MagnifyingGlass } from 'phosphor-react'
import * as Styled from './styles'

const SearchForm = () => {
  return (
    <Styled.SearchFormContainer>
      <input type="text" placeholder='Busque uma transação'/>
      <button type='submit'>
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </Styled.SearchFormContainer>
  )
}

export default SearchForm