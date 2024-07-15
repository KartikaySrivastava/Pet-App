import Login from "./Components/Login";
import Addpet from "./Components/Addpet";
import Dashboard from "./Components/Dashboard";
import View from "./Components/View";
import { Link, Route, Switch } from "wouter";
import { BrowserRouter as Router } from "react-router-dom";
import LocalAddPet from "./Components/LocalAddPet";
import Edit from "./Components/Edit";


function App() {
  
  return (

  <Router>
     <div>
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />  
      <Route path="/add-pet" component={Addpet} />
      <Route path="/view" component={View} />
      <Route path="/local-add-pet" component={LocalAddPet} />
      <Route path="/edit" component={Edit} />
    </Switch>
    </div>
  </Router>
   

  );
}

export default App;
