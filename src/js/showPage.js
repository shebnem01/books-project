window.addEventListener("load", getPageValue)

function getPageValue() {
    let sectionState = localStorage.getItem("sectionState")
    if (sectionState === "visible") {
        showSection2()
    } else {
        showSection1()
    }
}
function showSection2() {
    document.querySelector("#admin-login").style.display = "none";
    document.querySelector("#admin-panel").style.display = "flex";
}

function showSection1() {
    document.querySelector("#admin-panel").style.display = "none";
    document.querySelector("#admin-login").style.display = "flex";
}