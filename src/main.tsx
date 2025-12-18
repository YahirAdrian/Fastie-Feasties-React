import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './css/index.css'

import Home from './Home.tsx'
import Login from './components/authentication/Login.tsx'
import Signup from './components/authentication/Signup.tsx'

import { ProductProvider } from './context/ProductContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </ProductProvider>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
