import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import counter from './redux/modules/counter'

function App() {
  //여기서 store에 접근하여 ,counter의 값을 읽어오고 싶다!
  //useSelector
  const counter = useSelector((state) => {
    return state.counter
  })

  //dispatch 가져오기
  const dispatch = useDispatch()

  console.log('counter->', counter.number)
  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <button
        onClick={() => {
          dispatch({
            type: 'PLUS_ONE',
          })
        }}
      >
        +
      </button>
    </>
  )
}

export default App
