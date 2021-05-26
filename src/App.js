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
      <header className="header">
        <div className="logo"></div>
        <div className="description">
          <div className="wrapper">
            <div className="name"><h1>Автомастерская</h1></div>
            <div className="number"><h2>+79516052951</h2></div>
          </div>
          <nav>
            <ul className="ul">
                <li className="li"><Link className="a" to="/">Главная</Link></li>
                <li className="li"><Link className="a" to="/services">Услуги</Link></li>
                <li className="li"><Link className="a" to="/contacts">Контакты</Link></li>
                <li className="li"><Link className="a" to="/gallery">Галерея</Link></li>
                <li className="li"><Link className="a" to="/orders">Заказы</Link></li>
                <li className="li"><Link className="a" to="/users">Пользователь</Link></li>
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
      <footer className="footer">
        <div className="legal-info"><p>2021 Автомастерская у Бобби</p></div>
        <div className="contacts">
            <div className="number"><p>+79516052951</p></div>
            <div className="email"><p>CarServicesBob@gmail.com</p></div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
