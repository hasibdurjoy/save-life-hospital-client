import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Header from './pages/shared/Header/Header';
import Login from './pages/authentication/Login/Login';
import Home from './pages/home/Home.js/Home';
import Register from './pages/authentication/Register/Register';
import Footer from './pages/shared/Footer/Footer';
import Services from './pages/home/Services/Services/Services';
import NotFound from './pages/shared/NotFound/NotFound';
import ServiceDetails from './pages/home/Services/ServiceDetails/ServiceDetails';
import PrivateRoute from './pages/authentication/PrivateRoute/PrivateRoute';
import Nurses from './pages/home/Services/Nurses/Nurses/Nurses';
import Doctors from './pages/home/Services/Doctors/Doctors/Doctors';
import Pathologies from './pages/home/Services/Pathologies/Pathologies/Pathologies';
import Ambulances from './pages/home/Services/AmbulanceService/Ambulances/Ambulances';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/register"><Register /></Route>
            <Route exact path="/services"><Services /></Route>
            <PrivateRoute path="/doctors"><Doctors /></PrivateRoute>
            <PrivateRoute path="/pathology"><Pathologies /></PrivateRoute>
            <PrivateRoute path="/ambulances"><Ambulances /></PrivateRoute>
            <PrivateRoute path="/nurses"><Nurses /></PrivateRoute>
            <PrivateRoute path="/services/:serviceID"><ServiceDetails /></PrivateRoute>
            <Route path="*"><NotFound /></Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
