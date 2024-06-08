import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/Home/Home.jsx';
import Videos from './components/Videos/Videos.jsx';
import Selection from './components/Selection/Selection.jsx';
import Layout from './Layout.jsx';
import Modules from './components/Modules/Modules.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='videos' element={<Videos/>}/>
      <Route path='selection' element={<Selection/>}/>
      <Route path='modules/:name' element={<Modules/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
