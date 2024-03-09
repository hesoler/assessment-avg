import { SchemeProvider } from './context/SchemeContext'
import { Navbar } from './components/Navbar'
import RoutersComponent from './components/RoutersComponent'
import { useAuth } from './hooks/useAuth'

function App () {
  const currentYear = new Date().getFullYear()
  const { currentUser } = useAuth()

  return (
    <SchemeProvider>
      <header>
        <Navbar />
      </header>
      {currentUser &&
        <span className='hi'>
          <p><b>Welcome, {currentUser.username}!</b></p>
          <img className='user-avatar' alt='Avatar' src={currentUser.image} />
        </span>}
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
