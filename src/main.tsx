import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './css/index.css'

import Home from './Home.tsx'
import Login from './components/authentication/Login.tsx'
import Signup from './components/authentication/Signup.tsx'
import Profile from './components/authentication/Profile.tsx'
import UserOrders from './components/authentication/UserOrders.tsx'

import { ProductProvider } from './context/ProductContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/my-orders' element={<UserOrders />} />
        </Routes>
      </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
