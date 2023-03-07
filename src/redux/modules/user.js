// 초기 상태값
const initialState = {
  userId: 123,
}

//const [counter, setCounter] = useState(0)

//리듀서 : 'state'에 변화를 일으키는 함수
//(1) state를 action의 typd에 따라 변경하는 함숰

//input : state 와 action
const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default user
