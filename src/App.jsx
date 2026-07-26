import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import CreateAccount from './components/Create-Account'
import Eror from './components/Eror';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<Eror />} />
      </Routes>
    </>
  )
}

export default App