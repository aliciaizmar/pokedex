import React from 'react';
import './styles.scss';
import CardList from '../CardList';
import Filter from '../Filter';
import fetchService from "../../services/fetchService";

function App() {
  return (
    <div className='App'>
      This is: app
      <CardList />
      <Filter />
    </div>
  );
}

export default App;
