import React from 'react';
import { RecoilRoot } from 'recoil';

import Footer from './components/Footer';
import TodoList from './components/TodoList';

import "todomvc-app-css/index.css";


function App() {
  return (
    <RecoilRoot>
      <TodoList />
      <Footer />
    </RecoilRoot>
  );
}

export default App;
