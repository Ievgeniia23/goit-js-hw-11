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
    data-likes="${likes}"
    data-views="${views}"
    data-comments="${comments}"
    data-downloads="${downloads}"
 />
</a>
</li>`).join('')

}


   
 


