import {ADD_PERSON, DELETE_PERSON} from './ActionTypes';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
      }
      return { persons: [...state.persons, newPerson] };
    case DELETE_PERSON:
      return { persons: state.persons.filter(person => person.id !== action.id)};
    default:
      return state;
  }
}

export default reducer;