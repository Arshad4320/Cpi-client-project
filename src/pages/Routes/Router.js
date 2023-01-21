import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../../Layouts/DashboardLayouts";
import BookList from "../BookList/BookList";
import Contact from "../Contact/Contact";
import UploadNotice from "../Dashboard/UploadNotice";
import About from "../Home/About/About";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Notice from "../Notice/Notice";
import Student from "../Student/Student";
import Teacher from "../Teacher/Teacher";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/notice',
                element: <Notice></Notice>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/student',
                element: <Student></Student>
            },
            {
                path: '/teacher',
                element: <Teacher></Teacher>
            },
            {
                path: '/book',
                element: <BookList />
            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayouts></DashboardLayouts>, children: [
            {
                path: '/dashboard',
                element: <UploadNotice></UploadNotice>
            },

        ]
    }
])