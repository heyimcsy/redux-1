import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import counter from './redux/modules/counter'
import { PLUS_ONE } from './redux/modules/counter'
import { MINUS_ONE } from './redux/modules/counter'

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
      <div
        style={{
          backgroundColor: 'yellow',
          color: 'orange',
          border: '1px dotted orange',
          borderRadius: '5px',
          padding: '5px 10px',
          width: '150px',
        }}
      >
        현재 카운트 : {counter.number}
      </div>
      <div
        style={{
          display: 'flex',
          // justifyContent: 'center',
          margin: '20px 55px',
        }}
      >
        <button
          style={{
            backgroundColor: 'yellow',
            color: 'orange',
            border: '1px dotted orange',
            borderRadius: '5px',
            padding: '5px 10px',
          }}
          onClick={() => {
            dispatch({
              type: PLUS_ONE,
            })
          }}
        >
          +
        </button>
        <button
          style={{
            backgroundColor: 'yellow',
            color: 'orange',
            border: '1px dotted orange',
            borderRadius: '5px',
            padding: '5px 10px',
          }}
          onClick={() => {
            dispatch({
              type: MINUS_ONE,
            })
          }}
        >
          -
        </button>
      </div>
    </>
  )
}

export default App
