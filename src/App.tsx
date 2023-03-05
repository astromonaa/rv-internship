import Navbar from './components/Navbar';
import { authRoutes, publicRoutes } from './routes/routes';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from './hooks/hooks';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';


const App = () => {
  const { isAuth } = useAppSelector(state => state.auth)
  const { refresh, isRefreshLoading } = useAuth()

  useEffect(() => {
    if (localStorage.getItem('rv-token')) {
      refresh(null)
    }
  }, [])

  if (isRefreshLoading) {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
      </div>
    )
  }
  return (
    <div className='wrapper'>
      {isAuth &&
        <>
          <Navbar />
          <Routes>
            {
              authRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)
            }
            <Route path={'/*'} element={<Navigate to={'/'} />} />
          </Routes>
        </>}
      {
        !isAuth &&
        <Routes>
          {
            publicRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)
          }
          <Route path={'/*'} element={<Navigate to={'/auth'} />} />
        </Routes>
      }
    </div>
  );
};

export default App;