
import Navbar from './components/Navbar';
import { routes } from './routes/routes';
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div className='wrapper'>
      <Navbar/>
      <Routes>
        {
          routes.map(({path, element}) => <Route key={path} path={path} element={element} />)
        }
      </Routes>
    </div>
  );
};

export default App;