import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
/*
  액션 타입은 모듈이름/액션이름의 형태로 저장한다.
  문자열안에서, 앞에 모듈이름을 붙여줌으로써 액션이름이 중복되는걸 막아줌.
*/

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

/*                   ↕↕↕
  export const increase = () => ({ type: INCREASE });
  export const decrease = () => ({ type: DECREASE });
  createAction 함수를 사용해 축약함.

  정의해뒀던 액션 타입을 받아와서 액션 생성 함수를 정의함.
  이 함수를 다른 파일에서도 불러올 수 있게 export로 내보냄.
*/

const initialState = {
  number: 0,
}; // 초기상태 정의

const counter = handleActions(
  {
    INCREASE: (state, action) => ({ number: state.number + 1 }),
    DECREASE: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

/*                    ↕↕↕
  function counter(state = initialState, action) {
    switch (action.type) {
      case INCREASE:
        return { number: state.number + 1 };
      case DECREASE:
        return { number: state.number - 1 };
      default:
        return state;
   }
  } 
  이 코드는 핸들액션으로 변경하기전의 코드 이다.
  
  현재 상태와 액션객체를 받아와서 연산 후 리턴.
  리덕스가 처음 호출될 때는 state값이 undefined이기 때문에 state = initialState같은 형태로 초기상태를 받아옴.
*/

export default counter;

/*  
    export 는 여러개를 내보낼 수 있지만 export default 는 단 한개만 내보낼 수 있다.

    import counter from './counter';
    import {increase, decrease} from './counter';
    import counter, {increase, decrease} form './counter';                                                                                                 
    다음과 같은 형식으로도 불러 올 수 있다.
*/
