import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import ElectronicDevices from './Components/ElectronicDevices';
import { Component } from 'react';
import Friends from './Pages/Friends';


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
            <Route path='/' exact component= {Home} />
            <Route path='/sign-up' exact component= {LogIn} />
            <Route path= '/contact-us' exact component= {Contact} />
            <Route path='/register' exact component= {Register} />
            <Route path='/devices' exact component={ElectronicDevices} />
            <Route path='/friends' exact component={Friends} />
          </Switch>
          <p className="App-intro">;{this.state.apiResponse}</p>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
