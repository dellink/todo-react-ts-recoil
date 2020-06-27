import "todomvc-app-css/index.css";

import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

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
