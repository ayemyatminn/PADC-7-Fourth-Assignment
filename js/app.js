import {readData,displayMovies} from '/js/main.js';
import API_URL from '/js/api_url.js';
import key from '/js/api_key.js';

console.log("Hello world");
const template =  document.getElementById("movie_template").innerHTML;
const viewport = document.getElementById("movie_list");

const api_url = new API_URL();

fetch(api_url.getUpcomingURL(key))
.then((res) => console.log(res.json()))
.then((data) => readData(data))
.then((moviearray) => displayMovies(moviearray,template,viewport))