import{a as f,S as v,b,i as o}from"./assets/vendor-ce92400b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&h(p)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();f.defaults.baseURL="https://pixabay.com/api/";function m(a,e){const c={params:{key:"43997629-57ebc47830964b917ccbc0cb3",q:a,per_page:15,page:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return f.get("",c)}function g(a){return a.map(e=>`
        <li class="list">
        <a href="${e.largeImageURL}" class="address"><img src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}"class="image" /></a>
        <div class="content">
          <div class="content-text">
            <h2 class="caption">Likes</h2>
            <p class="parag">${e.likes}</p>
          </div>
          <div class="content-text">
            <h2 class="caption">Views</h2>
            <p class="parag">${e.views}</p>
          </div>
          <div class="content-text">
            <h2 class="caption">Comments</h2>
            <p class="parag">${e.comments}</p>
          </div>
          <div class="content-text">
            <h2 class="caption">Downloads</h2>
            <p class="parag">${e.downloads}</p>
          </div>
        </div>
      </li>
    `).join("")}const y=new v(".gallery a",{captionDelay:250}),w=document.querySelector(".form-input"),l=document.querySelector(".js-gallery"),r=document.querySelector(".js-backdrop"),i=document.querySelector(".js-load"),R={lines:11,length:0,width:52,radius:34,scale:.85,corners:.8,speed:1.1,rotate:28,animation:"spinner-line-fade-more",direction:1,color:"#a928a5",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},d=new b(R);let n=1,u=null;const L=15;w.addEventListener("submit",async a=>{a.preventDefault(),l.innerHTML="",n=1,d.spin(r),r.classList.remove("is-hidden"),u=a.currentTarget.elements.query.value.trim();try{const e=await m(u,n);o.show({title:`${e.data.total}`,message:"Pictures"}),e.data.totalHits===0&&(i.classList.add("is-hidden"),o.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!"})),l.innerHTML=g(e.data.hits),e.data.totalHits<L?i.classList.add("is-hidden"):i.classList.remove("is-hidden"),y.refresh()}catch{o.error({title:"ERROR"})}finally{d.stop(),r.classList.add("is-hidden"),a.target.reset()}});i.addEventListener("click",async a=>{n+=1,d.spin(r),r.classList.remove("is-hidden");try{const e=await m(u,n);l.insertAdjacentHTML("beforeend",g(e.data.hits)),Math.ceil(e.data.totalHits/L)===n&&(i.classList.add("is-hidden"),o.show({message:"Last page"})),y.refresh()}catch{o.error({title:"ERROR"})}finally{d.stop(),E(),r.classList.add("is-hidden")}});function E(){const e=l.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
