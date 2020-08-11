const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
// 액션 타입 정의

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
// 액션 생성함수 정의

let id = 6; // insert 호출시마다 1씩더해질예정.
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리액트와 리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: true,
    },
    {
      id: 3,
      text: 'Todo-List 개발하기',
      done: true,
    },
    {
      id: 4,
      text: 'AWS 배포하기',
      done: true,
    },
    {
      id: 5,
      text: '리덕스 익히기',
      done: false,
    },
  ],
}; //초깃값 설정

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
        // concat을 사용해 액션이후의 todo값을 기존 todos 배열에 합쳐서 새 배열로 반환
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(
          (todo) =>
            todo.id === action.id ? { ...todo, done: !todo.done } : todo,
          //map 함수를 사용해 토글값을 설정한 새로운 배열객체를 반환
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
        //filter 함수를 사용해 아이디가 변경된 요소들을 새 배열로 반환
      };
    default:
      return state;
  }
}
export default todos;
