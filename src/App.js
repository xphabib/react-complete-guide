import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

// function App() {
// return (
//   <div className="App">
//     <h1>Hi, I'm a React App</h1>
//   </div>
// );

// }

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Habib", age: 30 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    // console.log('Was Clicked!');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Habib", age: 28 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 20 },
        { name: "Habib", age: 30 }
      ]
    });
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It is working!</p>
        {/* <button onClick={this.switchNameHandler.bind(this, "Maximilian")}> */}
        <button 
          style= {style}
          onClick={() => this.switchNameHandler("Maximilian!!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangeHandler}
        >
          My Hobbies is Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
