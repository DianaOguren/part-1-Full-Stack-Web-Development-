import React, { useState } from 'react'


const Button = ({ handleFunc, text }) =>
  <button onClick={handleFunc}>{text}</button>


const AnecdoteStructure = ({ title, anecdote, votes }) => 
  <div>
    <h2>{title}</h2>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </div>


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [state, change_state] = useState({
    selected: 0,
    votes: new Array(anecdotes.length).fill(0)
  })

  var Numgenerate = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    change_state({ ...state, selected: randomNumber});
  }
  
  const updateVotes = () => {
    const copy = [...state.votes]
    copy[state.selected]++
    change_state({ ...state, votes: copy })
  }

  const max_num = Math.max( ...state.votes)
  
  return (

    <div>
      
      <AnecdoteStructure 
        title="Anecdote of the day" 
        anecdote={anecdotes[state.selected]} 
        votes={state.votes[state.selected]} />
        
      <Button handleFunc={updateVotes} text="vote" />
      <Button handleFunc={Numgenerate} text="next anecdote" />

      <AnecdoteStructure
        title="Anecdote with most votes"
        anecdote={anecdotes[state.votes.indexOf(max_num)]}
        votes={max_num} />
      
    </div>
  )
}

export default App