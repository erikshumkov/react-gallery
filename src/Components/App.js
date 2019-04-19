import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config.js';
import Container from './Container';

class App extends Component {

    state = {
      images: [],
      tags: ['lighthouse', 'sunrise', 'mountains', ''],
      loader: true,
      hist: null,
      search: null
    };

  componentDidMount() {
    // Get tags array from the state.
    const tags = this.state.tags;
    // Get the URL.
    let href = window.location.href;
    // Get the last word out of the URL string.
    let searchTag = href.split("/").pop();
    // Filter through the tags array and check if the tag is in the URL string.
    let word = tags.filter(tag => href.indexOf(tag) > 0);

    // If the URL has the search route without a search tag, prevent the loader.
    if(href.includes('/search/') && searchTag === "") {
      this.setState({ loader: false });
    }
    // If URL has the search route, fetch data with the search tag (searchTag).
    if(href.includes('/search/')) {
      this.handleSearch(searchTag);
    }
    // If the filter array method matches the tags array, search for that tag.
    else if (href.indexOf(word) > 0 && !href.includes('search')) {
      this.handleSearch(word);
    }
    // If it is the home route search for the handleSearch argument (Lighthouse).
    else if(href.indexOf(word) === 0 && !href.includes('search')) {
      this.handleSearch();
    }
  }

// When the search form is submitted, componentDidUpdate will listen for search word changes.
// If there's a new search value, new data is fetched.
  componentDidUpdate(prevProps, prevState) {

    if(this.state.search !== prevState.search) {
      this.handleSearch(this.state.search);
    }
  }

// If the search form is submitted or one of the NavLinks gets clicked handleSearch will fetch new data.
// When the app initially loads, handleSearch will fetch for 'Lighthouse'.
// Fetch with axios. If something doesn't work, catch will throw an error.
  handleSearch = (tags = 'Lighthouse') => {
    const key = apiKey.key;

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tags}&content_type=1&media=photos&per_page=16&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loader: false
        });
    })
      .catch(error => {
        console.log('Error fetching the data', error);
    });
  }

// If the form is submitted, router history(histData) and search tag (search argument) is passed up from the Form component to the App.
  formSubmit = (e, histData, search) => {
    let path = `/search/${search}`;
    this.setState({
      loader: true,
      search: search,
      hist: histData
     });
    e.preventDefault();
    // Push a new URL with router history push method.
    histData.push(path);
    // If the URL only got search in it, without a tag, disable the loader.
    if(path === '/search/') {
      this.setState({ loader: false });
    }
    e.currentTarget.reset();
  }

// Listens for navigation menu clicks. Get the text value from the link and pass it to the search function.
  handleClick = (e) => {
    this.setState({ loader: true });
    let value = e.target.innerHTML;
    this.handleSearch(value);
  }

  render() {
    return (
      <Container handleClick={this.handleClick}
                 formSubmit={this.formSubmit}
                 loader={this.state.loader}
                 data={this.state.images}
                 search={this.state.search}
       />
    );
  }
}

export default App;
