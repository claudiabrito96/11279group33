import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Contacts from './Pages/Contacts';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import LineChart from './Pages/LineChart';
import Devices from './Pages/Devices';
import searchBar from './Pages/searchBar';



function App (){  


  return(
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {LineChart} />
          <Route path='/sign-up' exact component= {searchBar} />
          <Route path= '/contact-us' exact component= {Devices} />
          <Route path= '/register' exact component= {Register} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
