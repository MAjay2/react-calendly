import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Individuals from './components/Enterprise';
import Teams from './components/Teams';
import Enterprise from './components/Individuals'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/individuals' element={<Individuals/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/enterprise' element={<Enterprise/>}/>

        </Routes>
      </Router>
   </div>
  )
}

export default App