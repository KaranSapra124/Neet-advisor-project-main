
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Webinars from './Pages/Webinars'
import Gallery from './Pages/Gallery'
import About from './Pages/About'
import PG_seminar from './Pages/PG_seminar'
import UG_seminar from './Pages/UG_seminar'
import News_Blog from './Pages/News_Blog'

const App = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/webinar",
      element: <Webinars />
    },
    {
      path: "/gallery",
      element: <Gallery />
    },
    {
      path: "/about",
      element: <About />
    }
    ,
    {
      path: "/pg-seminar",
      element: <PG_seminar />
    },
    {
      path: "/ug-seminar",
      element: <UG_seminar />
    },
    {
      path: "/news",
      element: <News_Blog />
    }
  ])
  return <>
    <RouterProvider router={appRoutes} />
  </>
}

export default App
