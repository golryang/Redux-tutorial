import React from 'react';
import logo from './logo.svg';
import Counter from './components/Counter';
import Todos from './components/Todos';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
// 커밋
const App = () => {
  return <CounterContainer />;
  /*
  할 일 목록 컴포넌트로 교체

  (<div className="TodoTemplate">
    <TodosContainer /> 
  </div>);
*/
};

export default App;
