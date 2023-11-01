// Query Selectors 
let card = document.querySelector("section").firstElementChild;
let image = card.firstElementChild;
let [c1, c2, c3] = card.lastElementChild.children;
// API Requests
let output = null;
let url = `https://api.github.com/users/hiteshchoudhary`;
// Methods
const imageDiv = ({ html_url, avatar_url }) => {
    image.setAttribute("href", html_url);
    image.setAttribute("target", "_blank"); //LinkSetup
    image.firstElementChild.setAttribute("src", avatar_url);//Image Update
}
const contentDiv = ({ name, bio, html_url }) => {
    c1.setAttribute("href",html_url);
    c1.setAttribute("target","_blank");
    c1.lastElementChild.firstChild.replaceWith(document.createTextNode(name));
    c2.firstChild.replaceWith(document.createTextNode(bio));
}

// Request
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        output = JSON.parse(xhr.responseText);
        // console.log(output);
        imageDiv(output);
        contentDiv(output);
    }
}