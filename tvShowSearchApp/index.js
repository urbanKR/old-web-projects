const form = document.querySelector('#search-form');
const imgDiv = document.querySelector('#imgs');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearImg();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    showImages(res.data);
    form.elements.query.value = '';
})

const showImages = (showArr) => {
    for (let result of showArr) {
        if (result.show.image) {
            const imgEL = document.createElement('img');
            imgEL.src = result.show.image.medium;
            imgDiv.append(imgEL);
        }
    }
}

const clearImg = () => {
    while (imgDiv.firstChild) {
        imgDiv.lastChild.remove();
    }
}

