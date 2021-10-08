import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserForm from './Components/UserForm';
import LoginForm from './Components/LoginForm';
import Display from './Components/Display';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/form" component={UserForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/display" component={Display} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
