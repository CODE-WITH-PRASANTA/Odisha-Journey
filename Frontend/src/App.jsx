import './App.css'
import Topbar from './Components/Topbar/Topbar'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      
      <main className="main-content">
        {/* Add your page content here */}
      </main>

      <Footer />
    </>
  )
}

export default App