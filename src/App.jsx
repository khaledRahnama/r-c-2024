import React from 'react'





const App = () => {

  const name = 'khaled';
  const x = 10
  const y = 20
  const names = ['khaled', 'ali', 'hasan']
  const families = ['rahnama', 'something', 'sth']
  const loggedIn = true

  const styles = {
    color: 'red',
    fontSize: '55px',
  }
  // if (loggedIn) {
  //   return <h1> Welcome to the world</h1>
  // }
  // if we run the above code , none of the below will gonna render
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

        {/* each child in a list should have a unique "key" prop . Solution : */}
        <ul>
          {families.map((families, index) => (
            <li key={families}> {families} </li>
          ))}
        </ul>
      </ul>

      {/* using a ternary */}
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
      {/* if i want to show only hello member i have 2 ways :  */}
      {loggedIn ? <h1>Hello Member</h1> : ''}
      {loggedIn && <h1>Hello Member</h1>}

      <p style={{ color: "red", fontSize: '24px' }}> I want to show styling </p>
      <p style={styles}> another way to use styles by defining a constant</p>
    </div>
  )
}

export default App