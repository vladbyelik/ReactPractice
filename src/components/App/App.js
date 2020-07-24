import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterLinks from '../RouterLinks';
import ContextExample from '../ContextExample';
import ErrorBoundary from '../ErrorBoundary';
import NewPagin from '../NewPagin/NewPagin';
import RefExample from '../RefExample/RefExample';
import Modal from '../Modal/Modal';
import store from '../../store';
import './App.css';

const PaginOne = lazy( () => import ('../PaginOne/PaginOne'));

const Loading = () => <div>Загрузка...</div>;

const App = () => {

  const [state, setState] = useState({
    isModalOpen: false
  });

  const toggleModal = () => setState(({ isModalOpen: !state.isModalOpen }));

  return (
  (<div className="App">
    <Router>
    <RouterLinks />
      <Suspense fallback={<Loading />}>
        <Switch>

          <Route exact path="/">
            <ErrorBoundary>
              <PaginOne props={store.images} elementsOnPage={3}/>
              <ContextExample />
            </ErrorBoundary>
          </Route>

          <Route path="/link1">
            <button onClick={toggleModal}>Open modal</button>
            {state.isModalOpen && <Modal onClose={toggleModal}> <h3>Modal is open!</h3> </Modal>}
            <NewPagin props={store.images} elementsOnPage={2}/>
          </Route>

          <Route path="/link2">
            <ErrorBoundary>
              <RefExample />
            </ErrorBoundary>
          </Route>

        </Switch>
      </Suspense>
    </Router>
  </div>)
  )
};

export default App;
