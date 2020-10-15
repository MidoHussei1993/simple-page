import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person"; // upaer case
import { Radium } from 'radium';
class App extends Component {
  state = {
    person: [
      {id: 'ddwwg', name: "Max", age: 28 },
      {id: 'jtr', name: "ali", age: 20 },
      {id: 'drh', name: "said", age: 22 }
    ],
    otherState:'some other value',
    showPersons: false
  };
  switchNameHandler = (newName) => {
    // console.log('was clicked')
    // DON`T DO THIS: this.state.person[0].name='ali'
    this.setState({ // use to update state it merge new state with the old one just override the property inside the setState() method
      person: [
        { name: newName , age: 1 },
        { name: "4j", age: 1 },
        { name: "dr", age: 1 }
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({ 
      person: [
        { name: event.target.value , age: 1 },
        { name: "4j", age: 1 },
        { name: "dr", age: 1 }
      ]
  })
}
  togglePersonHandler = () => { // this to make sure that this keyWord return to the class
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }
  deletePersonHandler = (personIndex) => {
    //good practice is to create a copy of your persons 
    //array before manipulating it 
    // const persons = this.state.person.slice();// we use slice to make copy of array
    const persons = [...this.state.person]
    persons.splice(personIndex , 1)
    this.setState({
      person: persons
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px'
    }

    let persons = null; //prefere way

    if(this.state.showPersons){
      persons = (
        <div>
            {this.state.person.map((person , index) => {
              return (
                // <Person
                //   changed={this.nameChangeHandler}
                //   click={this.switchNameHandler.bind(this, "said elshb7")}
                //   name={person.name}
                //   age={person.age}
                // />
                <Person
                  key={person.id}
                  changed={this.nameChangeHandler}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                />
              );
            })}
          </div>
      )
    }
    return (
      <div className="App">
        <h1>hi , im a React App</h1>
        {/* <button style={style} onClick={this.switchNameHandler}>
          switch
        </button> */}
         
        {persons}
        {/* <Person name={this.state.person[0].name} age="22">
          this is dummy text
        </Person>
        <Person name="ali" age="20" />
        <Person name="Mido" age="22" /> */}
        {/* {this.state.showPersons ? (
          <div>
            {this.state.person.map((person ,index) => {
              return (
                <Person
                key={person.id}
                  changed={this.nameChangeHandler}
                  click={this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                />
              );
            })}
          </div>
        ) : null} */}
        {/* {this.state.person.map(person =>{ prefeare not use it
         return <Person 
         click={()=>his.switchNameHandler('annemus function')}
         name={person.name}
          age={person.age} /> 
        })} */}
      </div>
    );
  }
}

export default Radium(App);




// const App = props => {
//   // return an array with exactly two elementsand always two elements
//   // the first element we  get back will always be our current state(the initilze object)
//   // the second element in state array will always be a function that allows us to update this state
//   const [personState , setPersonState] = useState({ 
//     person: [
//       { name: "Max", age: 28 },
//       { name: "ali", age: 20 },
//       { name: "said", age: 22 }
//     ],
//     otherState:'some other value'    
//   })
//   const [otherState,setOtherState] = useState({antherStateProperty:'hi!!'})
//   //Note the elegant way is actually to not manually merge your states
//   //but instead use useState multiple times 
//   const switchNameHandler = () => {
//     setPersonState({ //Note when you use react hooks your socend function that get from array NOT merge what you pass to update
//       //the old state it replaced it
//       ...personState,
//       person: [
//         { name: "ht", age: 1 },
//         { name: "4j", age: 1 },
//         { name: "dr", age: 1 }
//       ],

//     })
//     console.log(personState)
//   }
//   console.log(personState)
//     return (
//       <div className="App">
//         <h1>hi , im a React App</h1>
//         <button onClick={switchNameHandler}>switch</button>
//         {/* <Person name={this.state.person[0].name} age="22">
//           this is dummy text
//         </Person>
//         <Person name="ali" age="20" />
//         <Person name="Mido" age="22" /> */}
//         {personState.person.map(person =>{
//          return <Person 
//          click=""
//          name={person.name}
//           age={person.age} /> 
//         })}
//       </div>
//     );
  
// }