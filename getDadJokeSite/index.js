const jokeButton = document.querySelector("#joke-btn");
const clearButton = document.querySelector("#clear-btn");
const joke = document.querySelector("main h1");
const mainEl = document.querySelector("main");

jokeButton.addEventListener('click', function () {

    jokeButton.classList.add("btn-animation");
    addJoke();
    setTimeout(() => jokeButton.classList.remove("btn-animation"), 400);

});

clearButton.addEventListener('click', function () {
    while (joke.firstChild) {
        joke.removeChild(joke.lastChild);
    }
});



const addJoke = async () => {
    const jokeText = await getDadJoke();
    const newP = document.createElement('p');
    newP.append(jokeText);
    joke.append(newP);
};

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAIABLE..."
    }


};