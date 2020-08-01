import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function projectPage() {
  const main = document.createElement('main');
  main.setAttribute("role", "main");


  const sectionTop = document.createElement("section");

  sectionTop.innerHTML = `<section class="jumbotron text-center">
  <div class="container">
    <h1>Current Working Project</h1>
    <h2>Text Adventure Game</h2>
    <p class="lead text-muted">This project is the start of a text adventure game. Inspiration for certain aspects is taken from classic games like Dungeons and Dragons and the Elder Scrolls Series. Except in the style of Zork… with some modern additions!</p>
    <p>
      <a href="https://jamescopping.github.io/text-adventure/" class="btn btn-primary my-2">Text-Adventure-Page</a>
      <a href="https://github.com/jamescopping/text-adventure" class="btn btn-secondary my-2">Github-Page</a>
    </p>
  </div>
</section>`;

  main.appendChild(sectionTop);

  return main;
}

function header() {

  const header = document.createElement("header");
  const navbar = document.createElement("div");

  navbar.className = "bg-dark";
  navbar.id = "navbarHeader";

  const navbarContent = `<div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container d-flex justify-content-between">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <strong>Project-Pages</strong>
      </a>
    </div>
  </div>`;

  navbar.innerHTML = navbarContent;

  header.appendChild(navbar);
  return header;
}

document.body.appendChild(header());
document.body.appendChild(projectPage());



