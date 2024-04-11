`use strict`

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from "./js/pixabay-api";

import { createMarkup } from "./js/render-functions";


const form = document.querySelector("form");
const gallery = document.querySelector("ul")



form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = document.querySelector("input").value;
    

    fetchData(inputValue)
    .then(data => gallery.insertAdjacentHTML("beforeend",createMarkup(data.hits)))
    .catch(error => console.log("catch", error))

});


const lightbox = new SimpleLightbox('.gallery a', { 
     
    captionsData: `alt`,
    captionDelay: 250,
      
    });
    

    



   





// iziToast.show({
//     iconUrl: icon,
//     message:"Please choose a date in the future",
//     messageColor: '#ffffff',
//     color: '#ef4040',
//     close: true,
//     position: 'topRight',
   
//   });