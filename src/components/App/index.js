import React, { Fragment } from 'react';
import './styles.scss';
import CardList from '../CardList';
import Filter from '../Filter';
import fetchService from '../../services/fetchService';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: [],
      pokemonDataEvol: [],
      isFetching: true,
      searchName: ''
    };
  }

  fetchPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
      .then(response => response.json())
      .then(data =>
        data.results.forEach(item => {
          const newUrl = item.url;
          //console.log(newUrl);

          fetch(newUrl)
            .then(response => response.json())
            .then(newData => {
              const dataEvol = newData.species.url;
              //console.log(dataEvol);

              fetch(dataEvol)
                .then(response => response.json())
                .then(newDataEvol => {
                  //console.log(newDataEvol)
                  this.setState(prevState => {
                    return {
                      pokemonData: [...prevState.pokemonData, newData],
                      pokemonDataEvol: [
                        ...prevState.pokemonDataEvol,
                        newDataEvol
                      ],
                      isFetching: false
                    };
                  });
                });
            });
        })
      );
  }

  handlerSearchByName = event => {
    const { value } = event.target;
    this.setState({
      searchName: value
    });
  };

  filterData = () => {
    const { pokemonData, searchName, pokemonDataEvol } = this.state;
    console.log(pokemonDataEvol);
    return pokemonData
      .filter(item => {
        return searchName.length >= 3
          ? item.name.toLowerCase().includes(searchName.toLowerCase())
          : item.name;
      })
      .sort((a, b) => {
        return a.id - b.id;
      });
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  render() {
    const { isFetching, searchName } = this.state;
    return (
      <div className='App'>
        {isFetching ? (
          <div className='loading'>Loading...</div>
        ) : (
          <Fragment>
            <div className='square left-top' />
            <div className='square right-top' />
            <div className='circle left-bottom' />
            <div className='circle right-bottom' />
            <nav className='main__header hidden'>
              <h1>Pokemon Characters</h1>
            </nav>
            <main className='main__content'>
              <Filter
                searchName={searchName}
                filterByName={this.handlerSearchByName}
              />
              <CardList pokemonData={this.filterData()} />
            </main>
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
