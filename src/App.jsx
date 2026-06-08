
import './App.css'
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './pages/adminPage';
import TestPage from './pages/testPage';
import './index.css'

function App() {


  return (
    <div className="w-full h-screen" >
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/register" element = {<RegisterPage />} />
        <Route path = "/admin/*" element = {<AdminPage />} />
        <Route path = "/test" element = {<TestPage />} />
      </Routes>
      
      
    </div>
  )
}

export default App
