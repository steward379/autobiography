import appHead from "./components/appHead.js";
import waterfall from "./components/waterfall.js";
import footer from "./components/footer.js";
  
const all = () => {
  document.getElementById('all').appendChild(appHead());
  document.getElementById('all').appendChild(waterfall());
  document.getElementById('all').appendChild(footer());
};

all();

// darkmode

const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});