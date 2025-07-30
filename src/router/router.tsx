import {createBrowserRouter} from "react-router-dom"
import {Main, Registration} from '../pages/index';

export const router = createBrowserRouter([
    //TODO Поменять местами
    {
        path: '',
        element:<Registration/>,
    },
    {
        path: 'registration',
        element:<Main/>,
    }
])