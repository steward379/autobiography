const footer = () => {

    let footer = document.createElement("footer");
    let para = document.createElement("p");
    para.innerHTML =` © 2023 by <a href="https://linktr.ee/murmurline" target="_blank">Steward Tsou`
    footer.appendChild(para);

    console.log(footer);
        
    return footer;
}

export default footer;