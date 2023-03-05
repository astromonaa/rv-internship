import PerArea from "../pages/PerArea"
import Login from "../pages/Login"
import Settings from "../pages/Settings"
export const authRoutes = [
  {
    path: '/',
    element: <PerArea/>,
    exact: true
  },
  {
    path: '/workspaces/:id',
    element: <PerArea/>,
    exact: true
  },
  {
    path: '/settings',
    element: <Settings/>,
    exact: true
  },
  {
    path: '/settings/:route',
    element: <Settings/>,
    exact: true
  },
  {
    path: '/:workspace/settings/:operation',
    element: <Settings/>,
    exact: true
  }
]

export const publicRoutes = [
  {
    path: '/auth',
    element: <Login/>,
    exact: true
  }
]