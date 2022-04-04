import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
         <Route path='/'element={<Home></Home>}></Route>
         <Route path='/Review' element={<Details></Details>}></Route>
         <Route path='/details' element={<Details></Details>}></Route>
         <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
         <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/Login' element={<Login></Login>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
