`use strict`

export function createMarkup(arr) {
return arr.map(({webformatURL, largeImageURL,
     tags, likes, views, comments, downloads 
     }) => ` 
    
     <li class="gallery-item">
<a class="gallery-link" href="${largeImageURL}">
  <img
    class="gallery-image"
    src="${webformatURL}"
    data-source="${largeImageURL}"
    alt="${tags}"
   >
  </a>

  <ul class="text-card">
    <li class="text-card-item">
      <h3>Likes</h3>
      <p>${likes}</p>
    </li>

    <li class="text-card-item">
      <h3>Views</h3>
      <p>${views}</p>
    </li>

    <li class="text-card-item">
      <h3>Comments</h3>
      <p>${comments}</p>
    </li>

    <li class="text-card-item">
      <h3>Downloads</h3>
      <p>${downloads}</p>
    </li>
</ul>
 
</li>`).join('');
}


