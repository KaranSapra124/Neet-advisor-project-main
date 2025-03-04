import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Webinars from "./Pages/Webinars";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import PG_seminar from "./Pages/PG_seminar";
import UG_seminar from "./Pages/UG_seminar";
import News_Blog from "./Pages/News_Blog";
import IndividualPage from "./Components/News_&_Blog/IndividualPage";
import CareerPage from "./Pages/CareerPage";
import MBBS_Abroad from "./Pages/MBBS-Abroad";
import MedicalExpo from "./Pages/MedicalExpo";
import Contact from "./Pages/Contact";
import AdminLayout from "./Admin/Pages/AdminLayout";
import Testimonial from "./Admin/Components/Testimonials/Testimonial";
import SuperAdminLogin from "./Admin/Components/Auth/SuperAdminLogin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import OTPForm from "./Admin/Components/Auth/OTPForm";
import { SuperAdminProvider } from "./Admin/Components/Context/SuperAdminContext";
import AdminServices from "./Admin/Components/Services/Services";

const App = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/webinar",
      element: <Webinars />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/pg-seminar",
      element: <PG_seminar />,
    },
    {
      path: "/ug-seminar",
      element: <UG_seminar />,
    },
    {
      path: "/news",
      element: <News_Blog />,
    },
    {
      path: "/news/:id",
      element: <IndividualPage />,
    },
    {
      path: "/careers",
      element: <CareerPage />,
    },
    {
      path: "/mbbs-abroad",
      element: <MBBS_Abroad />,
    },
    {
      path: "/medical-expo",
      element: <MedicalExpo />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/testimonial",
          element: <Testimonial />,
        },
        {
          path: "/admin/Services",
          element: <AdminServices />,
        },
      ],
    },
    {
      path: "/admin/login",
      element: <SuperAdminLogin />,
    },
    {
      path: "/admin/otp-form",
      element: <OTPForm />,
    },
  ]);
  return (
    <>
      <ToastContainer></ToastContainer>
      <SuperAdminProvider>
        <RouterProvider router={appRoutes} />
      </SuperAdminProvider>
    </>
  );
};

export default App;
