import { Home } from './Pages/Home'
import './App.css'
import {  Route, Routes } from "react-router-dom";
import { Quiz } from './Pages/quiz_page';
import { CareerOptions } from './Pages/CareerOptions';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/careeroptions" element={<CareerOptions/>}/>
      </Routes>
    </> 
  )
}
export default App
