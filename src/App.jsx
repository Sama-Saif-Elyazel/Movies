import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Task2 from './components/Task2'
import Task1 from './components/Task1'
import Task3 from './components/Task3'
import Background from './components/Background'
import Home from './components/Home'
import Login from './components/Login'
import CreateAccount from './components/Create-Account'
import Eror from './components/Eror';


function App() {


  return (
    <>
      {/* <Background /> */}

      {/* <Task3 /> */}

      {/* <Navbar />*/}
      {/*<Hero /> */}
      {/* <Home /> */}
      {/* <Task1 /> */}
      {/* <Task2 /> */}
      {/* <Login /> */}
      {/* <CreateAccount /> */}


      {/* <Router> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<Eror />} />
      </Routes>


      {/* </Router> */}


    </>
  )
}

export default App
