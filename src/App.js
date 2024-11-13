import './media/style/style.css'
import SingUp from './screens/SingUp';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Opt from './screens/Opt';
import NewPassword from './screens/NewPassword';
import Index from './screens/Index';
import ProductListing from './screens/ProductListing';
import OrganizationListing from './screens/OrganizationListing';
import ServiceListing from './screens/ServiceListing';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index/> } />
        <Route path="/register" element={<SingUp/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/forgotPassword" element={<ForgotPassword/> } />
        <Route path="/opt" element={<Opt/> } />
        <Route path="/newpassword" element={<NewPassword/> } />
        <Route path="/bussiness-product" element={<ProductListing/> } />
        <Route path="/bussiness-service" element={<ServiceListing/> } />
        <Route path="/bussiness-organization" element={<OrganizationListing/> } />

     </Routes>
    </Router>
    </>
  );
}

export default App;
