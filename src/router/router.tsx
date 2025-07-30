import {createBrowserRouter} from "react-router-dom"
import {Main, Registration} from '../pages/index';

export const router = createBrowserRouter([
    {
        path: '',
        element:<Main/>,
    },
    {
        path: 'registration',
        element:<Registration/>
    }
])