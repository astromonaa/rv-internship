import PerArea from "../pages/PerArea"
export const routes = [
  {
    path: '/',
    element: <PerArea/>,
    exact: true
  },
  {
    path: '/:id',
    element: <PerArea/>,
    exact: true
  },
]