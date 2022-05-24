
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/Blogs';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import Home from './Pages/Home/Home';
import Login from './Shared/Login';
import Navbar from './Shared/Navbar';
import PageNotFound from './Shared/PageNotFound';



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



        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
