import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import TransactionProvider from "./context/transactions"
import Transactions from "./pages/Transactions"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

const App = () =>  {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <GlobalStyle />
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
