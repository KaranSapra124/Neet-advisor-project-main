
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services'

const App = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/services",
          element: <Services />
        }
      ]
    }
  ])
  return <>
    <RouterProvider router={appRoutes} />
  </>
}

export default App
