import{S as i}from"./assets/vendor-5af972a3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l="43279373-50d6c66b7fce6ad9a5efd1552",u=a=>{const o=new URLSearchParams({key:l,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.error("Error fetching data:",t)})};function d(a){return a.map(({webformatURL:o,largeImageURL:t,tags:n,likes:e,views:r,comments:c,downloads:s})=>` 
     <li class="gallery-item">
<a class="gallery-link" href="${t}">
  <img
    class="gallery-image"
    src="${o}"
    data-source="${t}"
    alt="${n}"
    data-likes="${e}"
    data-views="${r}"
    data-comments="${c}"
    data-downloads="${s}"
 />
</a>
</li>`).join("")}const f=document.querySelector("form"),m=document.querySelector("ul");f.addEventListener("submit",a=>{a.preventDefault();const o=document.querySelector("input").value;u(o).then(t=>m.insertAdjacentHTML("beforeend",d(t.hits))).catch(t=>console.log("catch",t))});new i(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
