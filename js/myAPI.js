import fetch from "node-fetch";

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';


export async function getMovies() {
    const res = await fetch(API_BASE + '/movies');
    const payload = await res.json();
    return payload.data;
  }
  
  export async function getMovie(id) {
    const res = await fetch(API_BASE + '/movies/' + id);
    const payload = await res.json();
    return payload.data;
  }

export async function getShowTimes() {
    const res = await fetch('static/showtimes.json');
    const data = await res.json();

    return data;
};




