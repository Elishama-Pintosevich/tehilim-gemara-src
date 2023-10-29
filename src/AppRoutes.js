import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddName from './comps/AddName'
import AddAid from './comps/AddAid'
import Give from './comps/Give'
import Home from './comps/Home'
import Layout from './comps/Layout'
import Page404 from './comps/Page404'
import OneTractate from './comps/OneTractate'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/addReq' element={<AddName/>}/>
            <Route path='/give' element={<Give/>}/>
            <Route path='/addAid' element={<AddAid/>}/>
            <Route path='/teilim/:id' element={<OneTractate/>}/>
            <Route path='/*' element={<Page404/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes