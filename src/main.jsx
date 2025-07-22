import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'

import { ToastContainer } from 'react-toastify'
import MovieListing from './Comopenent/MovieListing'

createRoot(document.getElementById('root')).render(
 <>
 <ToastContainer/>
 <MovieListing/>

 </>,
)
