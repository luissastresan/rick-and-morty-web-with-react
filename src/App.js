import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './pages/MainPage'
import EpisodesPage from './pages/EpisodesPage'
import CharactersPage from './pages/CharactersPage'
import LocationsPage from './pages/LocationsPage'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const middleware = []

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}


const initialValue = {
  episodes: {},
  characters: {},
  locations: {}
}

const reducer = (state=initialValue, action) => {
  switch (action.type) {
    case "ADD_EPISODES": {
      return { ...state, episodes: action.payload }}
    case "ADD_CHARACTERS": {
      return { ...state, characters: action.payload }}
    case "ADD_LOCATIONS": {
      return { ...state, locations: action.payload }}
      default:
        return state;
  }
}


const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/Episodes">
            <EpisodesPage />
          </Route>
          <Route path="/Characters">
            <CharactersPage />
          </Route>
          <Route path="/Locations">
            <LocationsPage />
          </Route>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
