
import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import { getMovie, getMovies } from "./js/myAPI.js";

const app = express();
app.engine("handlebars", engine({
  helpers: {
    markdown: md => marked(md),
  },
}));


app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", (req, res) => {
  res.render("homepage", {});
});

app.get("/startsida", async (req, res) => {
  res.render("homepage", {});
});


app.get("/AllaFilmer", async (req, res) => {
 const movies = await getMovies(); 
  res.render("allMovies", {movies});
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await getMovie(req.params.movieId);
  if (movie) {
    res.render("movie", { movie });
  } else {
    res.status(404).render("404");
  }
});



app.get("/Oppettider&Kontakt", (req, res) => {
  res.render("open");
});

app.get("/OmOss", (req, res) => {
  res.render("about");
});

app.get("/Biljettinfo", (req, res) => {
  res.render("ticketInfo");
});

app.get("/Nyhetsbrev", (req, res) => {
  res.render("newsletter");
});

app.get("/Presentkort", (req, res) => {
  res.render("giftcertificate");
});



app.use("*/static", express.static("./static"));
//app.use('*/static',express.static('static/'));
app.use("*/js", express.static("./js"));

app.listen(5080);
