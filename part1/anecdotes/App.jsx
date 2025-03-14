import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.anecdote}</div>
  )
}
const DisplayVotes = (props) => {
  return (
    <div>has {props.votes} votes</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0})

  const [selected, setSelected] = useState()
  let indiceMayor = 0
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > votes[indiceMayor]) {
      indiceMayor = i
    }
  }
  console.log('indice mayor', indiceMayor)

  return (
    <div>
      {anecdotes[selected]}
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
        next anecdote
      </button>

      <DisplayVotes votes={votes[selected]} />
      <button onClick={() => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
        console.log('votes',copy)
        console.log('votes', votes)
      }}>
        vote
      </button>
      <p>{anecdotes[indiceMayor]}</p>
      <p>has {votes[indiceMayor]} votes
      </p>
    </div>
  )
}

export default App