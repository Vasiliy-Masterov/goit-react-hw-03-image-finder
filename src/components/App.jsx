import React, { Component } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import styles from './App.module.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Button } from './Button';

const PIXABAY_KEY = '25809714-fb9ca043e2372697e049be88c';

const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    imageGallery: [],
    searchQuery: '',
    numberPage: 1,
    isLoading: false,
    largeImgURL: '',
    tagsImg: '',
    isShow: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, numberPage, imageGallery } = this.state;
    if (searchQuery === '') {
      return;
    }

    if (
      prevState.numberPage !== numberPage ||
      prevState.searchQuery !== searchQuery
    ) {
      this.setState({ isLoading: true });
      try {
        const respons = await axios.get(BASE_URL, {
          params: {
            key: PIXABAY_KEY,
            q: searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: numberPage,
          },
        });

        if (respons.data.hits.length === 0) {
          Notiflix.Notify.warning('Nothing found');
          return;
        }
        this.setState({
          imageGallery: [...imageGallery, ...respons.data.hits],
        });
      } catch {
        Notiflix.Notify.failure("Sorry, it's error");
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  hundleOnSubmit = event => {
    event.preventDefault();
    const value = event.currentTarget.elements.search.value.trim();
    if (value === '') {
      Notiflix.Notify.warning('Please, enter a search term');
      return;
    }
    if (this.state.searchQuery !== value) {
      this.setState({ numberPage: 1, imageGallery: [] });
    }
    this.setState({ searchQuery: value });
  };

  handleNextPage = () => {
    this.setState(prev => ({ numberPage: prev.numberPage + 1 }));
  };

  handleShowLargeImage = event => {
    const { srcset, alt } = event.currentTarget;
    this.setState({
      largeImgURL: srcset,
      tagsImg: alt,
      isShow: true,
    });
  };

  handleCloseModal = () => {
    this.setState({ isShow: false });
  };

  render() {
    const { isLoading, imageGallery, largeImgURL, tagsImg, isShow } =
      this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.hundleOnSubmit} />
        <ImageGallery
          imageGallery={imageGallery}
          showLargeImage={this.handleShowLargeImage}
        />
        {isLoading && <Loader />}
        {(imageGallery.length !== 0) & !isLoading ? (
          <Button loadNextPage={this.handleNextPage} />
        ) : null}
        {isShow && (
          <Modal
            source={largeImgURL}
            alt={tagsImg}
            closeModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
