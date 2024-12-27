
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Webinars from './Pages/Webinars'
import Gallery from './Pages/Gallery'

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
    }
  ])
  return <>
    <RouterProvider router={appRoutes} />
  </>
}

export default App
