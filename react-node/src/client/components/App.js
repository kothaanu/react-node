import logo from '../images/logo.svg';
import '../css/App.css';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import UserInfo from "./user/UserInfo";
import Login, {fakeAuth} from "./authentication/Login";


function App() {
  return (
      <div>

        <nav className="navbar navbar">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/userinfo">User Details</Link>
            </li>
              <li>
                  <Link to="/admin">Admin</Link>
              </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/userinfo" component={UserInfo} />
          <PrivateRoute path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
        </Switch>

      </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: props.location } }}
                    />
                )}
        />
    );
};

const Home = props => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
);

const Admin = ({match}) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Admin from React.
        </p>

      </header>
    </div>
);
export default App;
