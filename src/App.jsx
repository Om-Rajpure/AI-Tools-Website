import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Articles from './pages/Articles'
import Community from './pages/Community'
import BlogTitle from './pages/BlogTitle'
import RemoveBg from './pages/RemoveBg'
import RemoveObj from './pages/RemoveObj'
import ReviewResume from './pages/ReviewResume'
import GenImg from './pages/GenImg'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/ai' element={<Layout/>} > 
          <Route index element={<Dashboard />} />
          <Route path='blog-titles' element={<BlogTitle />} />
          <Route path='community' element={<Community />} />
          <Route path='remove-background' element={<RemoveBg />} />
          <Route path='remove-object' element={<RemoveObj  />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='generate-images' element={<GenImg />} />
          <Route path='write-article' element={<Articles />} />
          
        </Route>


      </Routes>
    </div>
  )
}

export default App