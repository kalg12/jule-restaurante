import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './style.css';
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Inicio } from './components/Inicio';
import { Concepto } from './components/Concepto';
import { Menu } from './components/Menu';
import { Blog } from './components/Blog';
import { Contacto } from './components/Contacto';
import { Reservaciones } from './components/Reservaciones';


function App() {
  return (
    <Router basename='/React'>
      <Navbar />
      <Switch>
        <Route path='/contacto'> <Contacto /> </Route>
        <Route path='/reservaciones'> <Reservaciones /> </Route>
        <Route path='/blog'> <Blog /> </Route>
        <Route path='/menu'> <Menu /> </Route>
        <Route path='/concepto'> <Concepto /> </Route>
        <Route path='/'> <Inicio /> </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;