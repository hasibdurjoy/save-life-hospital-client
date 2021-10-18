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
            <Route path="/services"><Services /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
