import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Home = React.lazy(()=>import("./pages/Home"))

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' index element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App