import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Notfound from './Pages/Notfound'
import WatchingHistory from './Pages/WatchingHistory'
function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/watch-history' element={<WatchingHistory/>} />
      <Route path='*' element={<Notfound/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
