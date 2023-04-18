import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector('ul.gallery');
const newImage = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a></li>`
  )
  .join('');

imagesList.insertAdjacentHTML('beforeend', newImage);

imagesList.addEventListener('click', fullImage);

function fullImage(event) {
  event.preventDefault();
  const fullSizeImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${fullSizeImg}">
`);
  instance.show();
  imagesList.addEventListener('keydown', closeByKeyDown);
  function closeByKeyDown(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}
