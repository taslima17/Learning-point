import './App.css';
/* react bootstrap import */

import 'bootstrap/dist/css/bootstrap.min.css';

/* react router */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* components */
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Teachers from './Components/Teachers/Teachers';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Enrolled from './Components/Enrolled/Enrolled';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route exact path="/services">
            <Services></Services>

          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route exact path="/service/:id">
            <Enrolled></Enrolled>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
