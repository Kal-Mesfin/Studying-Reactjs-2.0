
import {
Route,
createBrowserRouter,
createRoutesFromElements,
RouterProvider,
} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Mainlayouts from './Layouts/Mainlayouts';
import Jobpage from './Pages/Jobpage';
import Notfound from './Pages/Notfound';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path = '/' element= {<Mainlayouts/>}>
    <Route index element={<Homepage/>}/>
    <Route path='/jobs' element={<Jobpage/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Route>
  )
)

function App (){
  return <RouterProvider router={router}/>
};
export default App