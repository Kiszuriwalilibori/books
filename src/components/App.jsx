import React from 'react';
import {lazy} from 'react';
import Awaiting from '../js/awaiting';
import {
  Switch,
  Route,
} from "react-router-dom";

const StarWars = lazy(()=>import('./LandingPage'));
const Books = lazy(()=>import('./SearchResults/Books'));
const Search = lazy(()=>import('./SearchSection'));
const NotFound =lazy(()=>import ('./BooksNotFoundMessage'));
const Error =lazy(()=>import ('./ConnectionErrorMessage'));
const Spinner =lazy(()=>import('./common/Spinner'));
const SingleBook =lazy(()=>import('./SearchResults/SingleBook'));

function App() {
  return (
  
    <Switch>
      <Route exact  path = "/" component ={Awaiting(StarWars)} />
      <Route exact  path = "/search" component ={Awaiting(Search)} />
      <Route exact  path = "/books" component ={Awaiting(Books)} />
      <Route exact  path = "/not_found" component ={Awaiting(NotFound)} />
      <Route exact  path = "/connecting" component ={Awaiting(Spinner)} />
      <Route exact  path = "/single_book" component ={Awaiting(SingleBook)} />
      <Route exact  path = "/error" component ={Awaiting(Error)} /> 
    </Switch>

  );
}

export default App;