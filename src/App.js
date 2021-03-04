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
import pacinoPage from "./components/Contacts/pacinoPage";
import deniroPage from "./components/Contacts/deniroPage";
import scarlettPage from "./components/Contacts/scarlettPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/chats" component={Chats} />
        <Route path="/contacts/pacino" exact component={pacinoPage} />
        <Route path="/contacts/deniro" exact component={deniroPage} />
        <Route path="/contacts/scarlett" exact component={scarlettPage} />
      </Switch>
    </Router>
  );
}

export default App;
