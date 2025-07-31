import { createBrowserRouter } from 'react-router-dom'
import { Main, Registration } from '../pages/index'

export const router = createBrowserRouter([
  {
    path: 'registration',
    element: <Registration />,
  },
  {
    path: '',
    element: <Main />,
  },
])
