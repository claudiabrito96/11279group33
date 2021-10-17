import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LogIn from './Pages/LogIn'

const App = () =>{
  return(
    <div>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={LogIn}/>
       </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;