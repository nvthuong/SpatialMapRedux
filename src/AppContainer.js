import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TaskFlatList from './Components/TaskFlatList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// State
let appState = {
  data: [
    { title: 'title 1', isFinish: true },
    { title: 'title 2', isFinish: false },
    { title: 'title 3', isFinish: false },
    { title: 'title 4', isFinish: false },
    { title: 'title 5', isFinish: false },
  ]
}

// Action
const finishTast = (index) => {
  return {
    type: 'FINISH',
    atIndex: index
  }
}

const deleteTast = (index) => {
  return {
    type: 'DELETE',
    atIndex: index
  }
}
// Reducer
const taskListReducer = (state = appState, action) => {
  let newTaskList = appState.data;
  switch (action.type) {
    case 'FINISH':
      newTaskList[action.atIndex].isFinish = true;
      return {...state, data: newTaskList}
    case 'DELETE':
      newTaskList = newTaskList.filter((item, i) => i !== action.atIndex);
      return{...state, data: newTaskList};
    default:
      return state;
  }
}

const store = createStore(taskListReducer);

export default class SpatialMap extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store = { store }>
        <TaskFlatList />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SpatialMap', () => SpatialMap);
