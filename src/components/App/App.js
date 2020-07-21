import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterLinks from '../RouterLinks';
import ContextExample from '../ContextExample';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import store from '../../store';
import './App.css';

const Pagination = lazy( () => import ('../Accessibility/Accessibility'));

const App = () => {
  return (
    <div className="App">
      <Router>
      <RouterLinks />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>

            <Route exact path="/">
              <ErrorBoundary>
                <Pagination props={store} />
              </ErrorBoundary>
            </Route>

            <Route path="/link1">
              <div>Hello 1!</div>
            </Route>

            <Route path="/link2">
              <div>Hello 2!</div>
            </Route>

          </Switch>
        </Suspense>
      </Router>

      <ErrorBoundary>
        <ContextExample />
      </ErrorBoundary>
    </div>
  );
}

export default App;
