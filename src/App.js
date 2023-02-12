import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import RequestServices from './components/RequestServices';
import AboutLayout from './components/AboutLayout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetSittingTeam from './components/PetSittingTeam';
import CompanyFounder from './components/CompanyFounder';
import {createBrowserRouter,
        Route,
        NavLink,
        createRoutesFromElements,
        RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
    <Route   path="/" element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path='request' element={<RequestServices  />}/>
      <Route path='about' element={<AboutLayout/>} >
      <Route path='team' element={<PetSittingTeam/>} />
      <Route path='company' element={<CompanyFounder/>} />
    </Route>
    </Route>
  </Route>
  )
)

function App(services) {
  return (
    <div className="App">
       <RouterProvider router={router}/>

      
  

    <Footer/>
     
    </div>
  );
}

export default App;
