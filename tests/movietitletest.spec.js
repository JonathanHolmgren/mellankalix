import request from "supertest";
import app from "../js/app.js";
import { getMovies } from "../js/myAPI.js";

test("fdfd", async () => {
  const movies = await getMovies();

  for (let movie of movies) {
    const response = await request(app).get(`/movies/${movie.id}`).expect(200);

    expect(
      response.text.includes(
        `<h1 class="movie-title-2">${movie.attributes.title}</h1>`
      )
    ).toBeTruthy();
  }
});
