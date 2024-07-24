import React from 'react'

const name = 'khaled';
const x = 10
const y = 20
const names = ['khaled', 'ali', 'hasan']
const families=['rahnama','something','sth']

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello {name}
      </h1>
      <p> The sum of {x} and {y} is {x + y}</p>
      <ul>
        {names.map((names) => (
          <li> {names} </li>
        ))}
      </ul>

      <ul>
        {families.map((families)=>(
          <li> {families}</li>
        ))}
      </ul>

    </div>
  )
}

export default App