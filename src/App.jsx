import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import counter from './redux/modules/counter'
import { PLUS_ONE, MINUS_ONE } from './redux/modules/counter'
import { plusOne, minusOne, plusN, minusN } from './redux/modules/counter'
import { useEffect, useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  //여기서 store에 접근하여 ,counter의 값을 읽어오고 싶다!
  //useSelector
  const counter = useSelector((state) => {
    return state.counter
  })

  useEffect(() => {
    console.log('number ->' + number)
  }, [number])
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
          backgroundColor: 'yellow',
          color: 'orange',
          border: '1px dotted orange',
          borderRadius: '5px',
          padding: '5px 10px',
          width: '150px',
          marginTop: '5px',
        }}
      >
        <input
          type="number"
          value={number}
          onChange={(event) => {
            const { value } = event.target
            setNumber(+value)
          }}
        />
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
            // dispatch({
            //   type: PLUS_ONE,
            // })
            // dispatch(plusOne())
            dispatch(plusN(number))
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
            // dispatch({
            //   type: MINUS_ONE,
            // })
            dispatch(minusN(number))
          }}
        >
          -
        </button>
      </div>
    </>
  )
}

export default App
