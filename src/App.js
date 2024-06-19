import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import Nomatch from './pages/nomatch/nomatch';
import Postuser from './pages/employee/Postuser';
import UpdateUser from './pages/employee/UpdateUser';



function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route path="/"  element={<Dashboard/>} />
          <Route path="/employee"  element={<Postuser/>} />
          <Route path="*"  element={<Nomatch/>} />
          <Route path="/employee/:id" element={<UpdateUser/>}/>
      </Routes>

    </>
  );
}

export default App;
