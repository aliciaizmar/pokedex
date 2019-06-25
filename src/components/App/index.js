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
                const dataEvol = newDataSpec.evolution_chain.url;

                fetch(dataEvol)
                  .then(response => response.json())
                  .then(newDataEvol => {

                    //add new item to the json
                    newData.newDataSpec = {
                      ...newData.newDataSpec,
                      pokeSpecie: {
                        ...newDataSpec,
                        //modify this key
                        evolution_chain: newDataEvol
                      }
                    };
                    this.setState(prevState => {
                      return {
                        pokemonData: [...prevState.pokemonData, newData],
                        isFetching: false
                      };
                    });
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

  //Buscar id: en CardDetail iba cambiando el pokemon al actualizar
  getId = id => {
    const { pokemonData } = this.state;
    return pokemonData.find(pokemon => {
      return pokemon.id === parseInt(id);
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
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => (
                    <Fragment>
                      <Filter
                        searchName={searchName}
                        filterByName={this.handlerSearchByName}
                      />
                      <CardList pokemonData={this.filterData()} />
                    </Fragment>
                  )}
                />
                <Route
                  path='/pokemon/:id'
                  render={routerProps => {
                    return (
                      <CardDetail
                        match={this.getId(routerProps.match.params.id)}
                        pokemonData={pokemonData}
                      />
                    );
                  }}
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
