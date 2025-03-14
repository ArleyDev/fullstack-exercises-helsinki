import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Total = (props)=> {
  return (
    <p> all {props.good + props.neutral+props.bad}</p>
  )
}

const StatisticLine = ({text,value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics= (props) => {
  
    if (props.good===0 && props.neutral===0 && props.bad === 0) {
      return <h1>no feedback given</h1>
    }
    else {
      return(      
      <table>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
        <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
        <StatisticLine text='positive' value={props.good / (props.good + props.neutral + props.bad) * 100 + '%'} />
      </table>
    ) 

    }


  
}

const App = () => {
  //guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log(setGood(good + 1))
    setGood(good + 1)
    console.log('good', good)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    console.log('neutral', neutral)
  }

  const handleBad = () => {
    setBad(bad + 1)
    console.log('bad', bad)
  }
  return (
    <div>
      <h1> give feedback</h1>

      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}



export default App