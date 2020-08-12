import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

let projectCardsElement;
let cardList = [];


function projectPage() {
  const main = document.createElement('main');
  main.setAttribute("role", "main");


  const sectionTop = document.createElement("section");
  sectionTop.className = "jumbotron text-center mb-0";
  sectionTop.innerHTML = `<div class="container">
    <h1>Current Working Project</h1>
    <h2>Text Adventure Game</h2>
    <p class="lead text-muted">This project is the start of a text adventure game. Inspiration from certain aspects are taken from classic games like Dungeons and Dragons and the Elder Scrolls Series. Except in the style of Zork… with some modern additions!</p>
    <p>
      <a href="https://jamescopping.github.io/text-adventure/" class="btn btn-primary my-2">Text-Adventure-Page</a>
      <a href="https://github.com/jamescopping/text-adventure" class="btn btn-secondary my-2">Github-Page</a>
    </p>
  </div>`;

  main.appendChild(sectionTop);
  main.appendChild(projectCardContainer());

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


function projectCardContainer() {

  const projectCardContainer = document.createElement("div");

  projectCardContainer.className = "album py-5 bg-light";

  projectCardContainer.innerHTML = `<div class="container">
    <div id="project-cards" class="row">
    </div>
  </div>`;

  return projectCardContainer;
}

function genProjectCard(repoName, description) {

  const projectCard = document.createElement("div");
  projectCard.className = "col-md-4";

  if (description === "") {
    description = "Sorry, no description";
  }

  projectCard.innerHTML = `<div class="card mb-4 shadow-sm">
   <div class="card-body">
      <h5 class="card-title">${repoName.toUpperCase()}</h5>
      <p class="card-text">${description}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <a type="button" role="button" id="${repoName}-project-btn" href="https://jamescopping.github.io/${repoName}/" class="btn btn-sm btn-outline-primary">Project</a>
          <a type="button" role="button" id="${repoName}-github-btn" href="https://github.com/jamescopping/${repoName}/"  class="btn btn-sm btn-outline-secondary">Github</a>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return projectCard;
}

function addProjectCard(repoName, description = "") {
  cardList.push(genProjectCard(repoName, description));
}

function displayCards() {
  if (cardList.length > 0) {
    cardList.forEach(card => {
      projectCardsElement.appendChild(card);
    });
  }
}

(() => {
  document.body.appendChild(header());
  document.body.appendChild(projectPage());

  projectCardsElement = document.getElementById("project-cards");

  addProjectCard("text-adventure", "This project is a text adventure game that is inspired by Zork!");
  addProjectCard("dissertation-coevolution", "Coevolution project for my dissertaion completed in 2019. 2D Game used to explore the idea of using nueral networks and different learning algorithms to generate platforming levels.");
  addProjectCard("blank2d", "blank2d game engine/template");
  addProjectCard("project-pages");
  displayCards();

  const dissertationCoevolutionProjectLink = document.getElementById("dissertation-coevolution-project-btn");
  dissertationCoevolutionProjectLink.href = `${dissertationCoevolutionProjectLink.href}dissertation-james-copping.pdf`;

  const blank2dProjectLink = document.getElementById("blank2d-project-btn");
  blank2dProjectLink.setAttribute("aria-disabled", true);
  blank2dProjectLink.classList.add("disabled");
})();