import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Chats from "./components/ChatList/ChatList";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";

function App() {
  return (
    
    
    <Router>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/chats" component={Chats} />
      <Route path = "/deniroo" exact render= {()=>{
            <div>Deniro page</div>
        }} />
      
      
      
      </Switch>
      
     
        
    </Router>
    
  );
}

export default App;
