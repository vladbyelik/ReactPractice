import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterLinks from '../RouterLinks';
import ContextExample from '../ContextExample';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import store from '../../store';
import './App.css';
import NewPagin from '../NewPagin/NewPagin';

const Pagination = lazy( () => import ('../Accessibility/Accessibility'));

const Loading = () => <div>Загрузка...</div>;

const App = () => {
  return (
    <div className="App">
      <Router>
      <RouterLinks />
        <Suspense fallback={<Loading />}>
          <Switch>

            <Route exact path="/">
              <ErrorBoundary>

                <Pagination array={store.images} elements={3}/>
                
              </ErrorBoundary>
            </Route>

            <Route path="/link1">
              <NewPagin array={store.images} elements={2}/>
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
