import { SchemeProvider } from './context/SchemeContext'
import { Navbar } from './components/Navbar'
import RoutersComponent from './components/RoutersComponent'

function App () {
  const currentYear = new Date().getFullYear()
  return (
    <SchemeProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <RoutersComponent />
      </main>
      <footer>
        {currentYear} - © - All rights reserved
      </footer>
    </SchemeProvider>
  )
}

export default App
