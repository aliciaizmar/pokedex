import React from 'react';
import './styles.scss';
import CardList from '../CardList';
import Filter from '../Filter';
import fetchService from '../../services/fetchService';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: [],
      isFetching: true
    };
  }

  // fetchPokemons() {
  //   fetchService().then(data => {
  //     this.setState({
  //       pokemonData: data.results,
  //       isFetching: false
  //     });
  //   });

  // }

  fetchPokemons() {
    fetchService().then(data =>
      data.results.map(item => { 
        const newUrl = item.url;
        fetch(newUrl)
          .then(response => response.json())
          .then(newData => {
            this.setState(prevState => {
              return {
                pokemonData: [
                  ...prevState.pokemonData,
                  newData
                ],
                isFetching: false
              }
            });
          });
      })
    );
  }
 
  componentDidMount() {
    this.fetchPokemons();
  }

  render() {
    const { isFetching, pokemonData } = this.state;

    return (
      <div className='App'>
        {isFetching ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div>
            <p>This is: app </p>
            <CardList pokemonData={pokemonData} />
            <Filter />
          </div>
        )}
      </div>
    );
  }
}

export default App;
