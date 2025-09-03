import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePageSections from './components/homePageSections';
import Blog from './components/Blog/Blog';
import ShopPage from './components/Shop/ShopPage';
import Footer from "./components/Footer/Footer"
import LogInPage from './components/LogIn/LogInPage';
import DarkMode from './components/DarkMode/DarkMode';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePageSections/>}/>
      <Route path='/' element={<Blog/>}/>
      <Route path='/ShopPage'  element={<ShopPage/>} />
      <Route path='/LogInPage' element={<LogInPage/>}/>
      
    </Routes>
      <DarkMode/>
            <Footer/>

    </>
  )
}

export default App
