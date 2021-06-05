const load = () => `
<header class="header">
<nav class="navbar">
  <a href="index.html" class="nav-logo">
    <h1>Musical Minds</h1>
  </a>
  <ul class="nav-menu">
    <li class="nav-item">
      <a href="index.html" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
      <a href="play.html" class="nav-link">Play</a>
    </li>
    <li class="nav-item">
      <a href="quiz.html" class="nav-link">Quiz</a>
    </li>
    <li class="nav-item">
      <a href="contact.html" class="nav-link">Contact</a>
    </li>
  </ul>
  <button class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
</nav>
</header>
`;
const div = document.createElement("div");
div.innerHTML = load();
document.body.prepend(div);