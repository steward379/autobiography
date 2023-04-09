import appHead from "./components/appHead.js";

function App(){
  const app = document.createElement('div');
  app.innerHTML =`
  ${appHead()}
  `;
  return app;
}

const app = () => {
  document.getElementById('app').appendChild(App());
};

app();

// document.body.appendChild(appHead);

// dark mode

const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});