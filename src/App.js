import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import ElectronicDevices from './Components/ElectronicDevices';


const App = () =>{  
  
  return(
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/sign-up' exact component= {LogIn} />
          <Route path= '/contact-us' exact component= {Contact} />
          <Route path='/register' exact component= {Register} />
          <Route path='/devices' exact component={ElectronicDevices} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
