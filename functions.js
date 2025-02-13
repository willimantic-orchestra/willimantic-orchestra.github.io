document.addEventListener("DOMContentLoaded", function() {
    loadComponent("components/navigation.html", "navbar");
    loadComponent("components/title.html", "title");
    loadComponent("components/footer.html", "footer");
});

function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}
