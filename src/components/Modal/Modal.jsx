// При клике по элементу галереи должно открываться модальное окно
// с темным оверлеем и отображаться большая версия изображения.
// Модальное окно должно закрываться по нажатию клавиши ESC или
// по клику на оверлее.

// Внешний вид похож на функционал этого VanillaJS - плагина,
// только вместо белого модального окна рендерится изображение
// (в примере нажми Run).Анимацию делать не нужно!
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
//import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';

const galleryItem = {
  preview:
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower',
};

export const Modal = () => {
  const showLargeImage = galleryItem => {
    //event.preventDefault();

    // if (!event.target.classList.contains("gallery__image")) {
    // return;
    // }

    const largeImage = basicLightbox.create(
      `
      <div className={styles.Modal}>
        <img
          src="${galleryItem.source}"
          alt="${galleryItem.alt}"
      </div>
    `,
      {
        onShow: instance => {
          instance
            .element()
            .querySelector('img')
            .addEventListener('click', () => {
              instance.close();
            });
          document.addEventListener('keydown', event => {
            if (event.code !== 'Escape') {
              return;
            }
            instance.close();
          });
        },
        onClose: instance => {
          instance
            .element()
            .querySelector('img')
            .removeEventListener('click', () => {});
          document.removeEventListener('keydown', () => {});
        },
      }
    );
    largeImage.show();
  };

  return <div className={styles.Overlay}>{showLargeImage(galleryItem)}</div>;
};

Modal.propTypes = {
  img: PropTypes.string,
};

// function showLargeImage(event) {
//   event.preventDefault();

//   if (!event.target.classList.contains("gallery__image")) {
//   return;
//   }

//   const largeImage = basicLightbox.create(`
//       <img
//       src="${event.target.dataset.source}"
//       alt="${event.target.alt}"
//       />
//     `,
//     {
//     onShow: (instance) => {
//         instance.element().querySelector('img').addEventListener("click", () => {
//          instance.close();
//         });
//         document.addEventListener("keydown", event => {
//           if (event.code !== "Escape") {
//             return;
//           }
//           instance.close();
//         });
//     },
//     onClose: (instance) => {
//         instance.element().querySelector('img').removeEventListener("click",() => {});
//         document.removeEventListener("keydown", () => {});
//       }
//     });
//  largeImage.show();
// }
