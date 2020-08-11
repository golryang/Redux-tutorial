import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';

import counter from './modules/counter';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CounterContainer from './containers/CounterContainer';
//chrome F12 개발자도구에 리덕스 개발자 도구 추가

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

/* 리액트 컴포넌트에서 스토어를 사용 할 수 있도록 Provider 컴포넌스로 감싸준다. / store를 props로 넘겨주는 형식. */

serviceWorker.unregister();
// If ou want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
