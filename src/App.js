import React from 'react';
import './App.scss';
import CardList from './components/CardList';
import Filter from './components/Filter';

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
