import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallerMarkup = creatGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", gallerMarkup);

function creatGalleryMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return;
      `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
    alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join("");
}

console.log(galleryItems);
