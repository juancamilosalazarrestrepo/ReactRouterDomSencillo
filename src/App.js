import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';

import NavBar from './components/NavBar';

import UserPage from './pages/UserPage';


export default function App(){
    return(
        <BrowserRouter>
           <NavBar/>
         <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/users' element={<UsersPage/>} />
          <Route path='/user/:id' element={<UserPage/>} />
          <Route path='*' element={<NotFoundPage/>} />

         </Routes>
    
        </BrowserRouter>
    )

}