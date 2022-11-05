import { Component } from 'react';
import axios from 'axios';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import css from './ImageGallery.module.css';
// spinner
import { Loader } from 'components/Loader/Loader';

const KEY = '30083242-aef3007963a7f6878e8dbc6e6';

const searchParams = new URLSearchParams({
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  // per_page: 12,
  per_page: 5,
});

export class ImageGallery extends Component {
  state = {
    queryArr: [],
    status: 'idle',
    currentPage: 1,
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.query !== this.props.query) {
      this.setState({ queryArr: [], currentPage: 1 });
    }
    if (
      prevProp.query !== this.props.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.requestFunc().then(data => {
        this.setState(({ queryArr }) => ({ queryArr: [...queryArr, ...data] }));
      });
    }
  }

  //   request func
  async requestFunc() {
    try {
      this.setState({ status: 'pending' });

      searchParams.set('q', this.props.query);
      searchParams.set('page', this.state.currentPage);
      const response = await axios.get(
        `https://pixabay.com/api/?${searchParams}`
      );
      if (!response.data.hits.length) {
        console.log('hi');
        this.setState({ status: 'rejected' });

        return response.data.hits;
      }
      console.log('hi_next');
      this.setState({ status: 'resolved' });
      return response.data.hits;
    } catch (error) {
      console.log(error);
      this.setState({ status: 'rejected' });
      return;
    }
  }

  onClickBtnFn = e => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { queryArr, status } = this.state;
    if (status === 'rejected') {
      return alert(
        'Sorry, there are no images matching your search query. Please try again'
      );
    }

    if (status === 'idle') {
      return (
        <div className={css.idleTitle}>Please input the image set query...</div>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <div className={css.wrapper}>
          <ul className={css.gallery}>
            {queryArr.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                click={this.props.click}
              />
            ))}
          </ul>
          {this.state.queryArr && <Button onClick={this.onClickBtnFn} />}
        </div>
      );
    }
  }
}
