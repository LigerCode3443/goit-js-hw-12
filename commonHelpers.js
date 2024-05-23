import{S as d,a as u,i as c}from"./assets/vendor-6c99406a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function f(r){const t="https://pixabay.com/api/",o=new URLSearchParams({key:"43997629-57ebc47830964b917ccbc0cb3",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${t}?${o}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function h(r){return console.log(r),r.map(t=>`
        <li class="list">
        <a href="${t.largeImageURL}" class="address"><img src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}"class="image" /></a>
        <div class="content">
          <div class="content-text">
            <h2 class="caption">Likes</h2>
            <p class="parag">${t.likes}</p>
          </div>
          <div class="content-text">
            <h2 class="caption">Views</h2>
            <p class="parag">${t.views}</p>
          </div>
          <div class="content-text">
            <h2 class="caption">Comments</h2>
            <p class="parag">${t.comments}</p>
          </div>
          <div class="content-text">
            <h2 class="caption">Downloads</h2>
            <p class="parag">${t.downloads}</p>
          </div>
        </div>
      </li>
    `).join("")}const m=new d(".gallery a",{captionDelay:250}),g=document.querySelector(".form-input"),l=document.querySelector(".js-gallery"),i=document.querySelector(".js-backdrop"),y={lines:11,length:0,width:52,radius:34,scale:.85,corners:.8,speed:1.1,rotate:28,animation:"spinner-line-fade-more",direction:1,color:"#a928a5",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},p=new u(y);g.addEventListener("submit",r=>{r.preventDefault(),l.innerHTML="",p.spin(i),i.classList.remove("is-hidden");const t=r.currentTarget.elements.query.value.trim();f(t).then(o=>{o.hits.length===0&&c.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML=h(o.hits),m.refresh()}).catch(o=>{c.error({title:"ERROR",message:res.status})}).finally(()=>{p.stop(),i.classList.add("is-hidden"),r.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
