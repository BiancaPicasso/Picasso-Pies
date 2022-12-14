import Home from "../server/routes/home/home.component";
import Toppings from "./components/Toppings";
import React from 'react'
import { Routes, Route} from 'react-router-dom'

const App = () => {
  return  (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/toppings' element={<Toppings />} />
    </Routes>
  )
}

export default App;