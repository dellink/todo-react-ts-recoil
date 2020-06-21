import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter, Route } from "react-router-dom";

import Footer from './components/Footer';
import TodoList from './components/TodoList';

import "todomvc-app-css/index.css";

function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <div className="todoapp">
          <Route path="/:filter?" component={TodoList} />
        </div>
        <Footer />
      </HashRouter>
    </RecoilRoot>
  );
}

export default App;
