import{i as f,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="/goit-js-hw-11/assets/Group-d9947029.svg",p="43279373-50d6c66b7fce6ad9a5efd1552",m=s=>{const o=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.error("Error fetching data:",t)})};function y(s){return s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,views:r,comments:a,downloads:u})=>` 
    
     <li class="gallery-item">
<a class="gallery-link" href="${t}">
  <img
    class="gallery-image"
    src="${o}"
    data-source="${t}"
    alt="${i}"
   >
  </a>

  <ul class="text-card">
    <li class="text-card-item">
      <h3>Likes</h3>
      <p>${e}</p>
    </li>

    <li class="text-card-item">
      <h3>Views</h3>
      <p>${r}</p>
    </li>

    <li class="text-card-item">
      <h3>Comments</h3>
      <p>${a}</p>
    </li>

    <li class="text-card-item">
      <h3>Downloads</h3>
      <p>${u}</p>
    </li>
</ul>
 
</li>`).join("")}const l=document.querySelector("form"),n=document.querySelector("ul"),c=document.querySelector(".loader");c.style.display="none";l.addEventListener("submit",s=>{s.preventDefault();const o=document.querySelector("input").value;n.innerHTML="",c.style.display="block",m(o).then(t=>{t.hits.length===0?f.show({iconUrl:h,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"}):(n.insertAdjacentHTML("beforeend",y(t.hits)),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(t=>console.log("catch",t)).finally(()=>{c.style.display="none"}),l.reset()});
//# sourceMappingURL=commonHelpers.js.map
