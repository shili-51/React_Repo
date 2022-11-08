import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce','Clark','Diana','Bruce']
    const Persons = [
        {
            id:1,
            name:'Bruce',
            age:28,
            skill:'Vue'
        },
        {
            id:2,
            name:'Clark',
            age:30,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:31,
            skill:'React'
        }
    ]
    // const PersonList = Persons.map(person => (
    // <Person key={person.id} person={person}></Person>
    // ))
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>
      {
        // map method takes function as an argument
        //    PersonList
        nameList
      }
    </div>
  )
}

export default NameList
