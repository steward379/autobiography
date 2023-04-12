import "./scss/index.scss"; 
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import App from './App';

const root = document.getElementById('root');
// ReactDOM.render(<App />, root);
createRoot(root).render(<App />);

// darkmode

// const darkModeBtn = document.getElementById('dark-mode-btn');
// const body = document.querySelector('body');

// darkModeBtn.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');
//   body.classList.toggle('light-mode');
// });

// export default darkModeBtn;
