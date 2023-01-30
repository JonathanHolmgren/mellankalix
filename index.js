import express from "express";
import { engine } from "express-handlebars";
import { non } from "module";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", (req, res) => {
  res.render("homepage", {});
});

app.get("/startsida", (req, res) => {
  res.render("homepage", {});
});

app.get("/Oppettider%20&%20Kontakt", (req, res) => {
  res.render("open");
});

app.get("/Om%20Oss", (req, res) => {
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

app.get("/Alla%20Filmer", (req, res) => {
  res.render("allMovies");
});

app.use("/static", express.static("./static"));
app.use("/js", express.static("./js"));

app.listen(5080);
