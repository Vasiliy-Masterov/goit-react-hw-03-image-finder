import React, { Component } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import styles from './App.module.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
// import { Modal } from './Modal';
import { Button } from './Button';

const PIXABAY_KEY = '25809714-fb9ca043e2372697e049be88c';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    imageGallery: [],
    searchQuery: '',
    pageLimit: 12,
    numberPage: 4,
    isLoading: false,
  };

  async componentDidUpdate() {
    const { searchQuery, pageLimit, numberPage } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: PIXABAY_KEY,
          q: searchQuery,
          image_type: 'photo',
          orientation: 'gorizontal',
          safesearch: true,
          per_page: pageLimit,
          page: numberPage,
        },
      });
      this.setState({ imageGallery: response.data.hits });
      this.setState({ isLoading: false });
    } catch {
      Notiflix.Notify.failure("Sorry, it's error");
    } finally {
      this.setState({ isLoading: false });
    }
  }

  hundleOnSubmit = event => {
    event.preventDefault();
    console.log(event.currentTarget.elements.search.value);
    const value = event.currentTarget.elements.search.value;
    this.setState({ searchQuery: value });
    // event.currentTarget.reset();
  };

  render() {
    const { imageGallery, isLoading } = this.state;

    return (
      <div className={styles.App}>
        <span>Hello</span>
        <Searchbar onSubmit={this.hundleOnSubmit} />
        <ImageGallery imageGallery={imageGallery} />
        {isLoading && <Loader />}
        <Button />
      </div>
    );
  }
}
//         <Modal />
//         <Button />
