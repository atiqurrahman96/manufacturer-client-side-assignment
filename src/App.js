
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/Blogs';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import Home from './Pages/Home/Home';
import Login from './Shared/Login';
import Navbar from './Shared/Navbar';
import PageNotFound from './Shared/PageNotFound';
import Signup from './Shared/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordReset from './Shared/PasswordReset';
import PurchasePage from './PurchasePage/PurchasePage';
import RequireAuth from './Shared/RequireAuth';
import Dashboard from './Dashboard/Dashboard';
import Myorders from './Dashboard/Myorders';
import Reviews from './Dashboard/Reviews';
import MyProfile from './Dashboard/MyProfile';





function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/resetpassword' element={<PasswordReset />}></Route>
        <Route path='/part/:id' element={<RequireAuth><PurchasePage></PurchasePage></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Myorders></Myorders>}></Route>
          <Route path="reviews" element={<Reviews></Reviews>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>



        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
