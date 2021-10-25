import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';


const App = () =>{  
  
  return(
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/sign-up' exact component= {LogIn} />
          <Route path= '/contact-us' exact component= {Contact} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
