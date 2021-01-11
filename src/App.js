import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouterLinks from "./components/RouterLinks";
import ContextExample from "./components/ContextExample";
import ErrorBoundary from "./components/ErrorBoundary";
import CustomTextInput from "./components/CustomTextInput/CustomTextInput";
import MouseTracker from "./components/MouseTracker";
import ModalExample from "./components/ModalExample";
import Example from "./components/Example/Example";
import store from "./utils/store";
import Table from "./components/Table";
import "./App.css";
import PdfExcelEx from "./components/PdfExcelEx";

const PaginOne = lazy(() => import("./components/PaginOne"));

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
                <PaginOne props={store.images} elementsOnPage={3} />
                <ContextExample />
                <Example />
              </ErrorBoundary>
            </Route>

            <Route path="/link1">
              <ModalExample />
            </Route>

            <Route path="/link2">
              <ErrorBoundary>
                <CustomTextInput />
              </ErrorBoundary>
            </Route>

            <Route path="/cat">
              <ErrorBoundary>
                <MouseTracker />
              </ErrorBoundary>
            </Route>

            <Route path="/pdf">
              <ErrorBoundary>
                <PdfExcelEx />
              </ErrorBoundary>
            </Route>

            <Route path="/table">
              <ErrorBoundary>
                <Table />
              </ErrorBoundary>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
