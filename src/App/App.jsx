import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import About from '../About/About';
import aboutJSON from './about.json';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/about">
              <About about={aboutJSON} />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
