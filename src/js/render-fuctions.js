export function createMarkup(arr) {
  console.log(arr);
  return arr
    .map(img => {
      return `
        <li class="list">
        <a href="${img.largeImageURL}" class="address"><img src="${img.webformatURL}" alt="${img.tags}" title="${img.tags}"class="image" /></a>
        <div class="content">
          <div class="content-text">
            <h2 class="caption">Likes</h2>
            <p class="parag">${img.likes}</p>
          </div>
          <div class="content-text">
            <h2 class="caption">Views</h2>
            <p class="parag">${img.views}</p>
          </div>
          <div class="content-text">
            <h2 class="caption">Comments</h2>
            <p class="parag">${img.comments}</p>
          </div>
          <div class="content-text">
            <h2 class="caption">Downloads</h2>
            <p class="parag">${img.downloads}</p>
          </div>
        </div>
      </li>
    `;
    })
    .join('');
}
