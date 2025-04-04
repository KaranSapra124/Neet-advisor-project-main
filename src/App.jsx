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
import StudentsData from "./Admin/Components/StudentsData/StudentsData";
import Perimissions from "./Admin/Components/Permissions/Perimissions";
import { AdminProvider } from "./Admin/Components/Context/AdminContext";
import MainNewsPage from "./Admin/Components/News/MainNewsPage";
import AdminWebinars from "./Admin/Components/Webinars/Webinars";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pg_Seminar from "./Admin/Components/Pg_Seminar/Pg_Seminar";
import SeminarProgress from "./Admin/Components/SeminarProgress/SeminarProgress";
import Ug_seminar from "./Admin/Components/Ug_seminar/UgSeminar";
import Dashboard from "./Admin/Components/Dashboard/Dashboard";
import Queries from "./Admin/Components/Queries/Queries";
import Navbar from "./Components/Home/Navbar";
import NEET_UG from "./Components/About_NEET/NEET_UG";
import NEET_PG from "./Components/About_NEET/NEET_PG";
import NEET_MDS from "./Components/About_NEET/NEET_MDS";

const App = () => {
  const queryClient = new QueryClient();
  const appRoutes = createBrowserRouter([
    {
      element: <Navbar />,
      path: "/",
      children: [
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
          path: "/neet-ug",
          element: <NEET_UG />,
        },
        {
          path: "/neet-pg",
          element: <NEET_PG />,
        },
        {
          path: "/neet-mds",
          element: <NEET_MDS />,
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
      ],
    },
    {
      path: "/super-admin",
      element: <AdminLayout user={"Super-Admin"} />,
      children: [
        {
          path: "/super-admin",
          element: <Dashboard />,
        },
        {
          path: "/super-admin/testimonial",
          element: <Testimonial />,
        },
        {
          path: "/super-admin/Services",
          element: <AdminServices />,
        },
        {
          path: "/super-admin/students",
          element: <StudentsData />,
        },
        {
          path: "/super-admin/permissions",
          element: <Perimissions />,
        },
        {
          path: "/super-admin/news",
          element: <MainNewsPage />,
        },
        {
          path: "/super-admin/webinar",
          element: <AdminWebinars />,
        },
        {
          path: "/super-admin/seminar",
          element: <Pg_Seminar />,
        },
        {
          path: "/super-admin/ug-seminar",
          element: <Ug_seminar />,
        },
        {
          path: "/super-admin/seminar-progress",
          element: <SeminarProgress />,
        },
        {
          path: "/super-admin/queries",
          element: <Queries />,
        },
      ],
    },
    {
      path: "/sub-admin",
      element: <AdminLayout user={"sub-admin"} />,
      children: [
        {
          path: "/sub-admin",
          element: <Dashboard />,
        },
        {
          path: "/sub-admin/testimonial",
          element: <Testimonial />,
        },
        {
          path: "/sub-admin/Services",
          element: <AdminServices />,
        },
        {
          path: "/sub-admin/students",
          element: <StudentsData />,
        },
        {
          path: "/sub-admin/seminar",
          element: <Pg_Seminar />,
        },
        {
          path: "/sub-admin/webinar",
          element: <Pg_Seminar />,
        },
        // {
        //   path: "/sub-admin/permissions",
        //   element: <Perimissions />,
        // },
        {
          path: "/sub-admin/news",
          element: <MainNewsPage />,
        },
        {
          path: "/sub-admin/queries",
          element: <Queries />,
        },
      ],
    },
    {
      path: "/super-admin/login",
      element: <SuperAdminLogin title={"Super Admin Login"} />,
    },
    {
      path: "/admin/otp-form",
      element: <OTPForm title={"Super-Admin"} />,
    },
    {
      path: "/sub-admin/login",
      element: <SuperAdminLogin title={"Admin Login"} />,
    },
    {
      path: "/sub-admin/otp-form",
      element: <OTPForm title={"admin"} />,
    },
  ]);
  return (
    <>
      <ToastContainer></ToastContainer>
      <QueryClientProvider client={queryClient}>
        <SuperAdminProvider>
          <AdminProvider>
            <RouterProvider router={appRoutes} />
          </AdminProvider>
        </SuperAdminProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
