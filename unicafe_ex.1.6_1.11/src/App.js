import React, { useState } from 'react';


const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad;
  let avarage = (props.good*1+props.neutral*0+props.bad*(-1))/all;
  let newValue = (isNaN(avarage) ? 0 : (avarage));
  let pos = (props.good/all)*100;
  let positive = (isNaN(pos) ? 0 : (pos));
  
  const StatisticLine = ({text, value, sign}) => {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>{text}</td>
              <td>{value}{sign}</td>
            </tr>
          </tbody>
        </table>
        
      </>
    )
  }
  
  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good:" value ={props.good} />
      <StatisticLine text="neutral:" value ={props.neutral} />
      <StatisticLine text="bad:" value ={props.bad} />
      <StatisticLine text="total number:" value ={all} />
      <StatisticLine text="average score:" value ={newValue} />
      <StatisticLine text="positive feedback:" value ={positive} sign="%"/>
    </div>
  );
}

const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  const Button = ({func, but_name}) => {
    return (
      <>
        <button onClick={func}>{but_name}</button>
      </>
    )
  }


  return (
    <div>
      <div className="feedback">
        <h1>Give feedback</h1>
        <Button func={increaseGood} but_name="Good"/>
        <Button func={increaseNeutral} but_name="Neutral"/>
        <Button func={increaseBad} but_name="Bad"/>
      </div>

      <div>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>

    </div>
  );
}

export default App;
