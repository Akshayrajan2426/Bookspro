var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popupbox")
var addpopupbutton = document.getElementById("add-popup")

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelbtn = document.getElementById("cancelpopup")
cancelbtn.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

// container,Description,book-author,books-title

var con = document.querySelector(".container")
var addbook = document.getElementById("addpopup")
var des = document.getElementById("Description")
var bk = document.getElementById("book-author")
var bks = document.getElementById("books-title")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h1>${bks.value}</h1>
    <h5>${bk.value}</h5>
    <p>${des.value}</p> <button onclick="dltbook(event)">Delete</button>`
    con.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})
 function dltbook(event){
    event.target.parentElement.remove()
 }