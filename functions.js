document.addEventListener("DOMContentLoaded", function() {
    loadComponent("../components/navigation.html", "navbar");
    loadComponent("../components/title.html", "title");
    loadComponent("../components/footer.html", "footer");
});

function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}

// window.onload = function(){
//     const navbar = document.querySelector('#navbar');
//     const offset = -100;
//     const navPosition = navbar.getBoundingClientRect().top + window.scrollY -offset;
//     navbar.scrollIntoView({
//         behavior:'smooth',
//         top: navPosition
//     })
//     console.log(navPosition)
// }