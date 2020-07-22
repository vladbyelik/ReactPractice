import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterLinks from '../RouterLinks';
import ContextExample from '../ContextExample';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import NewPagin from '../NewPagin/NewPagin';
import RefExample from '../RefExample/RefExample';
import store from '../../store';
import './App.css';

const Pagination = lazy( () => import ('../Accessibility/Accessibility'));

const Loading = () => <div>Загрузка...</div>;

const App = () => (
  <div className="App">
    <Router>
    <RouterLinks />
      <Suspense fallback={<Loading />}>
        <Switch>

          <Route exact path="/">
            <ErrorBoundary>
              <Pagination array={store.images} elements={3}/>
              <ContextExample />
            </ErrorBoundary>
          </Route>

          <Route path="/link1">
            <NewPagin array={store.images} elements={2}/>
          </Route>

          <Route path="/link2">
            <ErrorBoundary>
              <RefExample />
            </ErrorBoundary>
          </Route>

        </Switch>
      </Suspense>
    </Router>
  </div>);

export default App;
