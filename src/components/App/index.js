import React, { Fragment } from 'react';
import './styles.scss';
import CardList from '../CardList';
import Filter from '../Filter';
import { Route, Switch } from 'react-router-dom';
import fetchService from '../../services/fetchService';
import CardDetail from '../CardDetail';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: [],
      //pokemonDataSpecies: [],
      isFetching: true,
      searchName: ''
    };
  }

  fetchPokemons() {
    fetchService().then(data =>
      data.results.forEach(item => {
        const newUrl = item.url;

        fetch(newUrl)
          .then(response => response.json())
          .then(newData => {
            const dataSpec = newData.species.url;

            fetch(dataSpec)
              .then(response => response.json())
              .then(newDataSpec => {
                //add new item to the json
                newData.newDataSpec = {
                  ...newData.newDataSpec,
                  pokeSpecie: newDataSpec
                };
                this.setState(prevState => {
                  return {
                    pokemonData: [...prevState.pokemonData, newData],
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
    const { pokemonData, searchName } = this.state;

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
    const { isFetching, searchName, pokemonData } = this.state;
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
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => <CardList pokemonData={this.filterData()} />}
                />
                <Route
                  path='/pokemon/:id'
                  render={routerProps => (
                    <CardDetail
                      match={routerProps.match}
                      pokemonData={pokemonData}
                    />
                  )}
                />
              </Switch>
            </main>
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
