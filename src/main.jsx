import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Search from './Components/Search.jsx'
import MainHeader from './Components/MainHeader.jsx'
import HeroList from './Components/HeroList.jsx'
import HeroCard from  './Components/HeroCard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> ,
    children:[
      {
        path: '',
        element: <Search/>
      },  
      {
        path: '',
        element: <MainHeader/>
      },  
      {
        path: 'HeroList',
        element: <HeroList/>
      },  
      {
        path: '/:id',
        element: <HeroCard/>
      }
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
