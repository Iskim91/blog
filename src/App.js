import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ArticlePage from './pages/ArticlePage.js';
import ArticlesListPage from './pages/ArticleListPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import Navbar from './Navbar.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div id="page-body">
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/about' component={AboutPage} exact />
            <Route path='/articles-list' component={ArticlesListPage} exact />
            <Route path='/article/:name' component={ArticlePage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
