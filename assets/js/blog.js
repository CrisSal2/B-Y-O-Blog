/*******************   Dark Theme Function *******************/

const icon = document.getElementById("icon");

icon.onclick = function() {

    document.body.classList.toggle("darkTheme");

    if (document.body.classList.contains("darkTheme")) {
        icon.src ="./assets/img/sun.png"
    } else {
        icon.src = "./assets/img/moon.png"
    }

}

/*******************   Posts Local Storage Content *******************/

const blogs = JSON.parse(localStorage.getItem("blogs"));

const mainEl = document.querySelector("#blogs-container");

for (let i = 0; i < blogs.length; i++) {
    let blog = blogs[i];

    const divEl = document.createElement("div");
    const pEl = document.createElement("p");
    const h2El = document.createElement("h2");
    const h3El = document.createElement("h3");

    h3El.textContent = blog.username;
    h2El.textContent = blog.title;
    pEl.textContent = blog.content;

    divEl.append(h2El, h3El, pEl);
    mainEl.append(divEl);

    divEl.setAttribute('class', 'post');

}

/**********************************   Back Button       *******************/


const backButton = document.getElementById("back-button");

backButton.addEventListener('click', function () {
    location.href = "index.html"
});
