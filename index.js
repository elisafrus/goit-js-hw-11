import{a as f,S as p,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="50507982-c6a73d82cfbe0bce0234dfd9b",y="https://pixabay.com/api/";async function g(i){console.log("getImagesByQuery");try{return(await f.get(y,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw r}}const c=document.querySelector(".gallery"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:d,downloads:u})=>`
        <li>
        <a href="${a}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function E(){document.getElementById("loader").classList.remove("loader-hidden")}function v(){document.getElementById("loader").classList.add("loader-hidden")}const l=document.querySelector(".form"),w=l.querySelector('input[name="search-text"]');l.addEventListener("submit",async i=>{i.preventDefault();const r=w.value.trim();if(!r){n.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}L(),E();try{const o=await g(r);if(!o.hits||o.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch(o){n.error({title:"Error",message:`Failed to fetch images: ${o.message}`,position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
