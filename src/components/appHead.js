const appHead = () => {
    
    let appHead = document.createElement("div");
    appHead.className = "appHead";
    
    let dataTitle = document.createElement("h1");
    dataTitle.classList.add("animate__animated", "animate__jello", "data-title");
    // h1.attribute.add("data-title");
    dataTitle.textContent = "WeHelp! Application";
    appHead.appendChild(dataTitle);
    
    let contacts = document.createElement("div");
    contacts.className = "contacts";
    appHead.appendChild(contacts);
    
    let dataSub = document.createElement("h3");
    dataSub.className = "data-sub";
    dataSub.textContent = "About Me";
    contacts.appendChild(dataSub);
    
    let btns = document.createElement("div");
    btns.innerHTML= `<a href="https://medium.com/@steward-spirit" target="_blank"><ion-icon name="logo-medium" size="large"></ion-icon></a>
    <a href="https://github.com/steward379" target="_blank"><ion-icon name="logo-github" size="large"></ion-icon></a>
    <a href="https://steward379.github.io/" target="_blank"><ion-icon name="earth-outline" size="large"></ion-icon></a>
    <ion-icon id="dark-mode-btn" name="moon-outline" size="large"></ion-icon> `;
    contacts.appendChild(btns);
    
    console.log(appHead);
    
    return appHead;
}

export default appHead;