const apiKey = "oqAyq0sEkm5cSKOmMw9vdHzXlYJbnHd4";
const searchTerms = ["puppies", "dog", "dogs", "puppy", "cats", "cat", "kitten", "kittens"];
const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerms[getRandom(searchTerms.length)]}&api_key=${apiKey}&limit=50`;

getBackgroundData(url);

function getBackgroundData(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => setBackground(data.data))
    .catch(err => err);
}

function setBackground(data) {
  let id = data[getRandom(data.length)].id;
  let gifUrl = `https://media.giphy.com/media/${id}/giphy.gif`;
  document.querySelector("body").style.background = `url(${gifUrl}) 100%/100% no-repeat`;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}