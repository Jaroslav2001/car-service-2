// import logo from './img/car.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './apps/Home';
import Services from './apps/Services';
import Contacts from './apps/Contacts';
import Gallery from './apps/Gallery';
import Orders from './apps/Orders';
import Users from './apps/Users';

function App() {
  return (
    <Router>
      <header>
        <div class="logo"></div>
        <div class="description">
          <div class="wrapper">
            <div class="name"><h1>Автомастерская</h1></div>
            <div class="number"><h2>+79516052951</h2></div>
          </div>
          <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/services">Услуги</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
                <li><Link to="/gallery">Галерея</Link></li>
                <li><Link to="/orders">Заказы</Link></li>
                <li><Link to="/users">Пользователь</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Switch>
        <Route path="/users">
            <Users />
        </Route>
        <Route path="/orders">
            <Orders />
        </Route>
        <Route path="/contacts">
            <Contacts />
        </Route>
        <Route path="/gallery">
            <Gallery />
        </Route>
        <Route path="/services">
            <Services />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
