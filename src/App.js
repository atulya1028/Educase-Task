import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Welcome} from './pages/Welcome';
import { CreateAccount } from './pages/CreateAccount';
import { Login } from './pages/Login';
import { AccountSetting } from './pages/AccountSetting';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/create-account' element={<CreateAccount/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/account-settings' element={<AccountSetting/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
