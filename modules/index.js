import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

/*  createStore 함수를 사용해 스토어를 만들때는 하나의 리듀서만을 사용해야함.
    combineReducers라는 유틸함수를 사용하면 쉽게 리듀서를 하나로 합칠 수 있다.

    파일 이름을 index로하면
    import rootReducer from './modules/indeex.js/ 가 아닌
    import rootReducer from './modules/ 형태로 축약해서 불러올 수 있음. */
