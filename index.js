import{S as m,i as h}from"./assets/vendor-DpVPnhEv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",p="43437392-3f8254e7ae10b5746fbcc03c6",y=n=>{const t=new URLSearchParams({key:p,q:n,image_type:"photo",orientation:"horizontal",per_page:5,safesearch:!0}),o=`${f}?${t}`;return fetch(o).then(s=>{if(!s.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.json()}).catch(s=>{console.log(s)})},g=document.querySelector(".gallery"),b=new m(".gallery a",{}),L=n=>{const t=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:c,comments:d,downloads:u})=>`
      <div class='card'>
      <a class="card-item" href="${s}">
        <img class="card-image" src="${o}" alt="${e}" loading="lazy" />
        <div class="card-info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${c}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </a>
      </div>

    `).join("");g.insertAdjacentHTML("beforeend",t),b.refresh()},l=document.querySelector(".search-form"),S=document.querySelector(".search-input"),a=document.querySelector(".loader"),i=document.querySelector(".backdrop");l.addEventListener("submit",v);function v(n){n.preventDefault(),gallery.innerHTML="";const t=S.value.trim();t!==""&&(a.classList.remove("hidden"),i.classList.remove("hidden"),y(t).then(o=>{o.hits.length===0?h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3}):L(o.hits),a.classList.add("hidden"),i.classList.add("hidden")}).catch(o=>{console.log(o)}),l.reset())}
//# sourceMappingURL=index.js.map
