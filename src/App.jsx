import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Favorites from './components/Favorites'
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/favorites' element={<Favorites/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
