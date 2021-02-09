let select = document.getElementById("language-select");

select.addEventListener("change", (ev) => {
    let actualPage = window.location.href.split("/")[4];
    location.replace("/" + ev.target.value + "/" + actualPage);
});