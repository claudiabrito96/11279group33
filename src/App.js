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
import friends from './Pages/Friends';
import ElectronicDevices from './Components/ElectronicDevices';
import { Component } from 'react';


class App extends Component{  
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  render() {
    return(
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component= {LineChart} />
            <Route path= '/contact-us' exact component= {Devices} />
            <Route path='/sign-up' exact component= {searchBar} />
            <Route path= '/register' exact component= {friends} />
          
          </Switch>
          <p className="App-intro">;{this.state.apiResponse}</p>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
