`use strict`

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from "./js/pixabay-api";


const btnSubmit = document.querySelector("button");
const form = document.querySelector("form");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = document.querySelector("input").value;
    

    fetchData(inputValue)
    .then(data => console.log(data))
    .catch(error => console.log("catch", error))

});

 
    

    



   





// iziToast.show({
//     iconUrl: icon,
//     message:"Please choose a date in the future",
//     messageColor: '#ffffff',
//     color: '#ef4040',
//     close: true,
//     position: 'topRight',
   
//   });