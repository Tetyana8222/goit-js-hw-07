import { galleryItems } from "./gallery-items.js";
// Change code below this line

const items = galleryItems
  .map((item) => {
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
</div>;`;
  })
  .join("");

const gallery = document.querySelector(".gallery");
gallery.innerHTML = items;

console.log(items);

// document.querySelector("button.image").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 	<img width="1400" height="900" src="https://placehold.it/1400x900">
// `
//     )
//     .show();
// };
