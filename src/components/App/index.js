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
      isFetching: true,
      searchName: ''
    };
    this.filterData = this.filterData.bind(this);
    this.handlerSearchByName = this.handlerSearchByName.bind(this);
  }

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
              };
            });
          });
      })
    );
  }

  handlerSearchByName(event) {
    const { value } = event.target;
    this.setState({
      searchName: value
    });
  }

  filterData() {
    const { pokemonData, searchName } = this.state;
    return pokemonData
      .filter(item => {
        return searchName.length >= 3
          ? item.name.toLowerCase().includes(searchName.toLowerCase())
          : item.name;
      })
      .filter(item => {
        return item.id;
      })
      .sort((a, b) => {
        return a.id - b.id;
      });
  }

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
          <div>
            <Filter
              searchName={searchName}
              filterByName={this.handlerSearchByName}
            />
            <CardList pokemonData={this.filterData()} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
