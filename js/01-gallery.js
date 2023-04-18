import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector('ul.gallery');
const newImage = galleryItems.map(
    (image) => `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a></li>`
    );

  imagesList.insertAdjacentHTML('beforeend', newImage);

  imagesList.addEventListener('click', changeUrl);
