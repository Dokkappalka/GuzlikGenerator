import React from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CollectionPage from './pages/CollectionPage'
import DogsPage from './pages/DogsPage'
import DogsCollectionPage from './pages/DogsCollectionPage'

function App() {
  return (
    <div className='bg-pink-100 min-h-screen max-h-full pb-5'>
      <div className='sticky top-0'>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/collection' element={<CollectionPage />} />
          <Route path='/dogsPage' element={<DogsPage />} />
          <Route path='/dogsCollection' element={<DogsCollectionPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
