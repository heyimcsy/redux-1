const PLUS_ONE = 'counter/PLUS_ONE'
const MINUS_ONE = 'counter/MINUS_ONE'
const PLUS_N = 'counter/PLUS_N'
const MINUS_N = 'counter/MINUS_N'

// action creator : action value 리턴하는 함수

export const plusOne = () => {
  return {
    type: PLUS_ONE,
  }
}
export const minusOne = () => {
  return {
    type: MINUS_ONE,
  }
}

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload: payload,
  }
}
export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload: payload,
  }
}
// src/modules/counter.js

// 초기 상태값
const initialState = {
  number: 0,
}

// 리듀서 : 'state'ㅇ에 변화를 일으키는 함수
// (1) state를 action의 타입리하는에 따라 변경하느 ㄴ함수

// input : state오 action
//action객체라는 것은 action type을 payload만큼 처리하는 것이다.
//ex; payload 가 3이다. 3만큼을 플러스

const counter = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    // PLUS_ONE이라는 case를 추가한다.
    // 여기서 말하는 case란, action.type을 의미한다.
    // dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
    // 아래 return 절이 실행된다.
    case PLUS_ONE:
      return {
        // 기존 state에 있던 number에 +1을 더한다.
        number: state.number + 1,
      }

    case MINUS_ONE:
      return {
        number: state.number - 1,
      }
    case PLUS_N:
      return {
        number: state.number + action.payload,
      }
    case MINUS_N:
      return {
        number: state.number - action.payload,
      }

    default:
      return state
  }
}

// 모듈파일에서는 리듀서를 export default 한다.
export default counter
